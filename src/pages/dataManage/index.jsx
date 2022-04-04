import './index.less';
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Tag, Space, Badge } from 'antd';

import img from '../../img/1391.png';
const originData = [];

const now = new Date();
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    id: '1'+ Math.ceil(Math.random()*10000),
    name: `Edrward`,
    age: Math.ceil(Math.random()*16)+'岁'+ Math.ceil(Math.random()*12)+'月', 
    treatDate: now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate(),
    gender: ['male', 'female'][i%2],
    symptom: ['GHD', 'GHD', 'FSS', 'GHD', 'ISS', 'FSS'][i%6],
    patriHeight: 164 + Math.ceil(Math.random()*15),
    matriHeight: 150 + Math.ceil(Math.random()*14),
    initHeight: (90 + Math.random()*40).toFixed(1),
    initWeight: 10 + Math.ceil(Math.random()*35),
    averageGrowth: (Math.random()).toFixed(3),
    GH1: (Math.random()*3).toFixed(2),
    GH2: (Math.random()*4).toFixed(2),
    GH3: (Math.random()*6).toFixed(2),
    GH4: (Math.random()*7).toFixed(2),
    GH5: (Math.random()*6).toFixed(2),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing '
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Records = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const handleEdit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleDelete = key => {
    console.log(key)
    // form.setFieldsValue({
    //   name: '',
    //   age: '',
    //   address: '',
    //   ...record,
    // });
    // setEditingKey(record.key);
  };

  const columns = [
    {
      title: '研究编号',
      dataIndex: 'id',
      key: 'id',
      width: '100px',
      align: 'center'
    },  
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      width: '120px',
      align: 'center',
      // render: text => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      editable: true,
      width: '85px',
      align: 'center',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      render: gender => <div>{gender.toLowerCase()==='female'?'女':'男'}</div>
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        editable: true,
        width: '100px',
        align: 'center',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '用药时间',
        dataIndex: 'treatDate',
        key: 'treatDate',
        editable: true,
        width: '120px',
        align: 'center',
    },
    {
        title: '适应症',
        key: 'symptom',
        dataIndex: 'symptom',
        width: '100px',
        align: 'center',
        render: symptom => {
            let color = 'geekblue';
            symptom = symptom.toUpperCase();
            if (symptom === 'ISS') color = 'green';
            else if (symptom === 'FSS') color = 'volcano';
            return (
                <Tag color={color} key={symptom}>
                    {symptom}
                </Tag>
            )
        }
    },
    {
        title: '父身高',
        key: 'patriHeight',
        dataIndex: 'patriHeight',
        width: '100px',
        align: 'center',
    },
    {
        title: '母身高',
        key: 'matriHeight',
        dataIndex: 'matriHeight',
        width: '90px',
        align: 'center',
    },
    {
        title: '首次身高(cm)',
        key: 'initHeight',
        dataIndex: 'initHeight',
        width: '100px',
        align: 'center',
    },
    {
        title: '首次体重(kg)',
        key: 'initWeight',
        dataIndex: 'initWeight',
        width: '100px',
        align: 'center',
    },
    {
        title: '平均增长速率(cm/月)',
        key: 'averageGrowth',
        dataIndex: 'averageGrowth',
        width: '120px',
        align: 'center',
    },
    {
        title: 'GH1\n(ng/ml)',
        key: 'GH1',
        dataIndex: 'GH1',
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH2\n(ng/ml)',
        key: 'GH2',
        dataIndex: 'GH2',
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH3\n(ng/ml)',
        key: 'GH3',
        dataIndex: 'GH3',
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH4(ng/ml)',
        key: 'GH4',
        dataIndex: 'GH4',
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH5(ng/ml)',
        key: 'GH5',
        dataIndex: 'GH5',
        width: '90px',
        align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: '140px',
      align: 'center',
      fixed: 'right',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <Typography.Link disabled={editingKey !== ''} onClick={() => handleEdit(record)}>
              修改
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <a>删除</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const expandedRowRender = () => {
    const columns = [
      { title: '摄片日期', dataIndex: 'shotDate', key: 'shotDate', align: 'center',},
      { 
          title: '摄片图像', 
          dataIndex: 'shotImg', 
          key: 'shotImg', 
          align: 'center',
          render: img => (
              <img style={{width: '80px', height: '106px'}} src={img}></img>
          )
      },
      {
        title: 'Bone Age',
        key: 'ba',
        align: 'center',
        render: () => (
          <span>
            <Badge status="success" />
            12.8
          </span>
        ),
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>修改</a>
            <a>删除</a>
          </Space>
        ),
      },
    ];
    const data = [];
    const age = Math.ceil(Math.random()*12);
    const year = 2010 + Math.ceil(Math.random()*10);
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        shotDate: `${year+i}-${Math.ceil(Math.random()*12)}-${Math.ceil(Math.random()*31)}`,
        shotImg: img,
        ba: age+(i+Math.random()*2).toFixed(1),
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false}  />;
  }


  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        scroll={{ x: 1500 }}
        expandable={{
            expandedRowRender
            // expandedRowRender: record => <p style={{ margin: 0 }}>诊断主诉：{record.description}</p>,
            // rowExpandable: record => record.description !== '',
          }}
      />
    </Form>
  );
};

export default Records;
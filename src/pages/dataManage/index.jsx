import './index.less';
import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Tag, Space, Badge, message, Button } from 'antd';
import { getDataList, editDataListEntry, deleteDataListEntryById, getDataListExpandInfoById } from '../../api/getDataList';
import { expandColumn } from '../../data/listColumn';

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
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  useEffect(()=>{
    getDataList().then(res => {
      setData(res.list);
    });
    
  }, [])


  let expandData = [];
  getDataListExpandInfoById().then(res => {
    console.log("get expand data: ", res);
    expandData = res.list;
  });

  const ExpandedRowRender = (record, index, indent, expanded) => {
    console.log(record, index, indent, expanded);
    
    return (
      <>
        <Table columns={expandColumn} dataSource={expandData} pagination={false}  />
        <Button onClick={handleAdd} type="primary" style={{ marginTop: 16 }}>
          Add a row
        </Button>
      </>
    ) 
  }

  const isEditing = (record) => record.key === editingKey;

  const handleEdit = (record) => {
    form.setFieldsValue({
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
        // 传递给后端
        console.log('修改数据: ', row);
        await editDataListEntry(row)
        .then(res => {
          message.success('修改成功');
        })
        .catch(err => {
          message.error('修改失败');
        })
  
        // 替换数据
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

  const handleDelete = async(key) => {
    console.log(key);
    deleteDataListEntryById(key)
    .then(res => {
      message.success('删除成功');
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      newData.splice(index, 1);
      setData(newData);
    })
    .catch(err => {
      message.error('删除失败');
    })
  };

  const handleAdd = () => {

  }

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
        width: '110px',
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
        editable: true,
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
        editable: true,
        width: '100px',
        align: 'center',
    },
    {
        title: '母身高',
        key: 'matriHeight',
        dataIndex: 'matriHeight',
        editable: true,
        width: '90px',
        align: 'center',
    },
    {
        title: '首次身高(cm)',
        key: 'initHeight',
        dataIndex: 'initHeight',
        editable: true,
        width: '100px',
        align: 'center',
    },
    {
        title: '首次体重(kg)',
        key: 'initWeight',
        dataIndex: 'initWeight',
        editable: true,
        width: '100px',
        align: 'center',
    },
    {
        title: '平均增长速率(cm/月)',
        key: 'averageGrowth',
        dataIndex: 'averageGrowth',
        editable: true,
        width: '120px',
        align: 'center',
    },
    {
        title: 'GH1\n(ng/ml)',
        key: 'GH1',
        dataIndex: 'GH1',
        editable: true,
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH2\n(ng/ml)',
        key: 'GH2',
        dataIndex: 'GH2',
        editable: true,
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH3\n(ng/ml)',
        key: 'GH3',
        dataIndex: 'GH3',
        editable: true,
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH4\n(ng/ml)',
        key: 'GH4',
        dataIndex: 'GH4',
        editable: true,
        width: '90px',
        align: 'center',
    },
    {
        title: 'GH5\n(ng/ml)',
        key: 'GH5',
        dataIndex: 'GH5',
        editable: true,
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
              <Typography.Link disabled={editingKey !== ''}>
                删除
              </Typography.Link>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];


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
        expandable={
            // {expandedRowRender: record => <p style={{ margin: 0 }}>诊断主诉：{record.description}</p>,}
            // expandable
            {
              expandRowByClick: true,
              // onExpand: getExpandData,
              expandedRowRender: ExpandedRowRender
            }
            // 
            // rowExpandable: record => record.description !== '',
          }
      />
    </Form>
  );
};

export default Records;
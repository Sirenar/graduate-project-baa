import { Space, Badge } from 'antd';

export const expandColumn = [
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
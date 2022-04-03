import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const AgeColumn = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };

  const data = [
    {
      "age": "<3岁",
      "value": 27,
      "type": "GHD"
    },
    {
      "age": "3-6岁(含3岁)",
      "value": 279,
      "type": "GHD"
    },
    {
      "age": "6-9岁(含6岁)",
      "value": 250,
      "type": "GHD"
    },
    {
      "age": "9-16岁(含9岁)",
      "value": 332,
      "type": "GHD"
    },
    {
      "age": "<3岁",
      "value": 15,
      "type": "ISS"
    },
    {
      "age": "3-6岁(含3岁)",
      "value": 140,
      "type": "ISS"
    },
    {
      "age": "6-9岁(含6岁)",
      "value": 123,
      "type": "ISS"
    },
    {
      "age": "9-16岁(含9岁)",
      "value": 242,
      "type": "ISS"
    },
    {
        "age": "<3岁",
        "value": 9,
        "type": "FSS"
      },
      {
        "age": "3-6岁(含3岁)",
        "value": 64,
        "type": "FSS"
      },
      {
        "age": "6-9岁(含6岁)",
        "value": 54,
        "type": "FSS"
      },
      {
        "age": "9-16岁(含9岁)",
        "value": 95,
        "type": "FSS"
      },
  ];
  
  const config = {
    data,
    width: 600,
    height: 240,
    isStack: true,
    xField: 'age',
    yField: 'value',
    seriesField: 'type',
    legend: {
        layout: 'horizontal',
        position: 'top-right'
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column {...config} />;
};

export default AgeColumn;
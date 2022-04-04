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
      "age": "≤3岁",
      "value": 47,
      "type": "GHD"
    },
    {
      "age": "4-5岁",
      "value": 129,
      "type": "GHD"
    },
    {
      "age": "6-7岁",
      "value": 173,
      "type": "GHD"
    },
    {
      "age": "8-9岁",
      "value": 207,
      "type": "GHD"
    },
    {
      "age": "10-11岁",
      "value": 146,
      "type": "GHD"
    },
    {
      "age": "12-13岁",
      "value": 101,
      "type": "GHD"
    },
    {
      "age": "14-16岁",
      "value": 85,
      "type": "GHD"
    },
    {
      "age": "≤3岁",
      "value": 23,
      "type": "ISS"
    },
    {
      "age": "4-5岁",
      "value": 71,
      "type": "ISS"
    },
    {
      "age": "6-7岁",
      "value": 106,
      "type": "ISS"
    },
    {
      "age": "8-9岁",
      "value": 134,
      "type": "ISS"
    },
    {
      "age": "10-11岁",
      "value": 98,
      "type": "ISS"
    },
    {
      "age": "12-13岁",
      "value": 57,
      "type": "ISS"
    },
    {
      "age": "14-16岁",
      "value": 31,
      "type": "ISS"
    },
    {
        "age": "≤3岁",
        "value": 18,
        "type": "FSS"
      },
      {
        "age": "4-5岁",
        "value": 54,
        "type": "FSS"
      },
      {
        "age": "6-7岁",
        "value": 43,
        "type": "FSS"
      },
      {
        "age": "8-9岁",
        "value": 35,
        "type": "FSS"
      },
      {
        "age": "10-11岁",
        "value": 31,
        "type": "FSS"
      },
      {
        "age": "12-13岁",
        "value": 29,
        "type": "FSS"
      },
      {
        "age": "14-16岁",
        "value": 12,
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
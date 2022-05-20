import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const LineGraph = () => {
//   const [data, setData] = useState([]);

  const data = [
      {
          date: '12月',
          type: '算法A',
          value: 3,
      }, 
      {
          date: '12月',
          type: '算法B',
          value: 1,
      }, 
      {
          date: '12月',
          type: '算法C',
          value: 2,
      }, 
      {
          date: '1月',
          type: '算法A',
          value: 4,
      }, 
      {
          date: '1月',
          type: '算法B',
          value: 2,
      }, 
      {
          date: '1月',
          type: '算法C',
          value: 1,
      }, 
      {
        date: '2月',
        type: '算法A',
        value: 5,
    }, 
    {
        date: '2月',
        type: '算法B',
        value: 3,
    }, 
    {
        date: '2月',
        type: '算法C',
        value: 2,
    },
    {
        date: '3月',
        type: '算法A',
        value: 4,
    }, 
    {
        date: '3月',
        type: '算法B',
        value: 1,
    }, 
    {
        date: '3月',
        type: '算法C',
        value: 2,
    },  
    {
        date: '4月',
        type: '算法A',
        value: 3,
    }, 
    {
        date: '4月',
        type: '算法B',
        value: 4,
    }, 
    {
        date: '4月',
        type: '算法C',
        value: 1,
    },  
    {
        date: '5月',
        type: '算法A',
        value: 4,
    }, 
    {
        date: '5月',
        type: '算法B',
        value: 3,
    }, 
    {
        date: '5月',
        type: '算法C',
        value: 2,
    },  
  ]

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    xAxis: {
        line: null,
        label: {
            // offset: 8
        }
    },
    yAxis: {
        grid: {
            line: {
              style: {
                lineWidth: 2,
                lineDash: [4, 5],
                strokeOpacity: 0.7,
                cursor: 'pointer'
              }
            }
          },
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    seriesField: 'type',
    color: ({ type }) => {
      return type === '算法A' ? '#6294f9' : type === '算法B' ? '#61d9ab' : '#647698';
    },
    smooth: true,
    lineWidth: 5,
    lineStyle: {
        lineWidth: 3,
        shadowColor: '#aaa',
        shadowBlur: 14,
        shadowOffsetX: 5,
        shadowOffsetY: 6,
    },
    legend: {
        position: 'top-right',
    }
  };

  return <Line {...config} />;
};

export default LineGraph;
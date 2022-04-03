import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/plots';

const GHDRose = () => {
  const data = [
    {
      type: 'GHD',
      value: 461,
      gender: '男生',
    },
    {
      type: 'ISS',
      value: 250,
      gender: '男生',
    },
    {
      type: 'FSS',
      value: 120,
      gender: '男生',
    },
    {
      type: 'GHD',
      value: 441,
      gender: '女生',
    },
    {
      type: 'ISS',
      value: 276,
      gender: '女生',
    },
    {
      type: 'FSS',
      value: 104,
      gender: '女生',
    }
  ]; // 堆叠玫瑰图

  const config = {
    data,
    width: 200,
    height: 190,
    appendPadding: 10,
    xField: 'type',
    yField: 'value',
    isStack: true,
    // 当 isStack 为 true 时，该值为必填
    seriesField: 'gender',
    radius: 0.9,
    label: {
      offset: -15,
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    legend: {
      layout: 'horizontal',
      position: 'bottom',
    },

  };
  return <Rose {...config} />;
};

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { RadialBar } from '@ant-design/plots';

// const GHDRadialBar = () => {
//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   asyncFetch();
//   // }, []);

//   // const asyncFetch = () => {
//   //   fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
//   //     .then((response) => response.json())
//   //     .then((json) => setData(json))
//   //     .catch((error) => {
//   //       console.log('fetch data failed', error);
//   //     });
//   // };

//   const data = [
//         {
//           type: 'GHD',
//           value: 461,
//           gender: '男生',
//         },
//         {
//           type: 'ISS',
//           value: 250,
//           gender: '男生',
//         },
//         {
//           type: 'FSS',
//           value: 120,
//           gender: '男生',
//         },
//         {
//           type: 'GHD',
//           value: 441,
//           gender: '女生',
//         },
//         {
//           type: 'ISS',
//           value: 276,
//           gender: '女生',
//         },
//         {
//           type: 'FSS',
//           value: 104,
//           gender: '女生',
//         }
//   ];
//   const config = {
//     data,
//     xField: 'year',
//     yField: 'value',
//     colorField: 'type',
//     isStack: true,
//     maxAngle: 270,
//   };

//   return <RadialBar {...config} />;
// };

export default GHDRose;
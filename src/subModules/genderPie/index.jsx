import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const GenderPie = () => {
    const data = [
      {
        type: '男生',
        value: 842,
      },
      {
        type: '女生',
        value: 866,
      },
    ];
    const config = {
      width: 200,
      height: 230,
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      color: ['#6395f8', '#f276a0'],
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
      statistic: {
        title: {
            style: {
                fontSize: '14px',
            },
            content: '总人数'
        },
        content: {
          style: {
            fontSize: '20px',
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
      },
      legend: {
        layout: 'horizontal',
        position: 'bottom',
      },
    };  
    return <Pie {...config} />;
  };

export default GenderPie;
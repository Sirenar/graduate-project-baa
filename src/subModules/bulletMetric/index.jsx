import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/plots';

const BulletMetric = ({data}) => {
    console.log(data);
  data = data || [];
  const { measures, target } = data[0];
  console.log('measures: ', measures);
  console.log('target: ', target);
  let measureColor = '#89DC93';
  if (measures < target[0]) measureColor = '#FEC837';
  else if (measures > target[1]) measureColor =  '#F58A61';
  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: measureColor,
      target: '#d9d9d9',
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    // 自定义 legend
    legend: false,
  };
  return <Bullet {...config} />;
};

export default BulletMetric;
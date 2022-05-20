import './index.less';
import React, { useState } from 'react';
import {  Button, Radio  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import LineGraph from '../../subModules/line';
import ContributionPie from '../../subModules/contributionPie';
import avatar1 from '../../img/avatar1.png';
import avatar2 from '../../img/avatar2.png';
import avatar3 from '../../img/avatar3.png';

function ModelTraining () {

    const models = [
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar1,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar2,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar3,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar3,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar2,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar1,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar2,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar1,
        },
        {
            name: '适合3-6岁女孩BAA模型',
            author: 'Siren Wang',
            date: '2022-4-23',
            algo: '算法A',
            avatar: avatar3,
        }
    ];
    return (
    <>
    <div className='training'>
        <div className='training-overview-graph box'>
            <div className='line'>
             <h2 className='graph-label important'>训练模型统计</h2>
                <LineGraph></LineGraph>
            </div>
        </div>
        <div className='training-overview-data'>
            <div className='contribution box'>
                <h3 className='important'>Your Contribution</h3>
                <div className='pie'>
                <ContributionPie></ContributionPie>
                </div>
            </div>
            <div className='create box'>
                <span className='label'>NEW MODEL</span>
                <Button type="dashed" ghost className='create-btn'>
                    新建模型
                </Button>
            </div>
        </div>
    </div>
    <div className='model-panel'>
        {
            models.map(model => (
                <div className='model box'>
                    <h3 className='important'>{model.name}</h3>
                    <div className='model-info'>
                        <div className='info-box'>
                            <span>基于{model.algo}</span>
                            <span>{model.date}</span>
                            <span>By {model.author}</span>
                        </div>
                        <div className="avatar-box">
                            <img src={model.avatar}></img>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    </>
    )
}
export default ModelTraining;
import './index.less';
import React, { useState } from 'react';
import {  Button, Modal, Menu, Select, Checkbox, InputNumber, Space } from 'antd';
import { Link } from 'react-router-dom';
// import { HistoryOutlined } from '@ant-design/icons';
import LineGraph from '../../subModules/line';
import ContributionPie from '../../subModules/contributionPie';
import avatar1 from '../../img/avatar1.png';
import avatar2 from '../../img/avatar2.png';
import avatar3 from '../../img/avatar3.png';
import upload from '../../img/upload.png';
import { algorithnms } from '../../data/modelList.jsx';

const { Option } = Select;

function ModelTraining () {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const children = [];
    for (let i = 0; i < 13; i++) {
        children.push(<Option key={i}>{`${i}至${i+3}岁`}</Option>);
    }

    const algoList = algorithnms.map(algo => <Option key={algo.name}>{algo.name}</Option>);
    

    const showCreateModal = () => {
        console.log('click');
        setIsModalVisible(true);
    };
  
    const handleSubmit = () => {
        setIsModalVisible(false);
    };
  
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleChange = value => {
        console.log(`selected ${value}`);
    };

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
                <Button type="dashed" ghost className='create-btn' onClick={showCreateModal}>
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
    <Modal title="Create New Model" visible={isModalVisible}
        maskClosable={false} 
        centered={true} 
        width={1000}
        className="create-model"
        footer={null}
        onCancel={handleCancel}
    >
        <div className='model-body'>
            <div className='choosen-data-box'>
                <img src={upload}></img>
                <h3>从右侧选择数据标签</h3>
                <div className='des'>Select data labels from the right</div>
            </div>
            <div className='options-box'>
                <Menu mode="horizontal" defaultSelectedKeys={['create']}>
                    <Menu.Item key="create">
                        Create
                    </Menu.Item>
                    <Menu.Item key="processing">
                        Processing
                    </Menu.Item>
                    <Menu.Item key="product">
                        Product
                    </Menu.Item>
                </Menu>
                <div className='label'>年龄标签</div>
                <Select mode="tags" style={{ width: '100%' }} placeholder="Age Tags" onChange={handleChange}>
                    {children}
                </Select>
                <div className='lower-option'>
                    <div>
                        <div className='label'>性别标签</div>
                        <Select defaultValue="all" style={{ width: 120 }}>
                            <Option value="all">全部</Option>
                            <Option value="male">男性</Option>
                            <Option value="female">女性</Option>
                        </Select>
                    </div>
                    <div>
                        <div className='label'>使用算法</div>
                        <Select style={{ width: 240 }}  placeholder="Algorithm to be applied">
                            {algoList}
                        </Select>
                    </div>
                </div>
                <div className='training-option'>
                    <Space>
                        <div>Batch Size: </div>
                        <InputNumber min={1} max={100} defaultValue={16} />
                    </Space>
                    <Space style={{marginLeft: '20px'}}>
                        <div>Epochs: </div>
                        <InputNumber min={1} max={100} defaultValue={60} />
                    </Space>
                </div>
                <div className='notification-option'>
                    <div><strong>没有人</strong>会收到此模型的通知</div>
                    <Checkbox>发布后通知我</Checkbox>
                    <Checkbox>发布后通知所有人</Checkbox>
                </div>
                <Button type="primary" onClick={handleSubmit} className='submit-btn'>Create Model</Button>
                <Button type="text" onClick={handleCancel} className='cancel-btn'>Cancel</Button>
                <div className='tutorial'>
                    Having problem? See <Link>how other models are built</Link>
                </div>
            </div>
        </div>
    </Modal>
    </>
    )
}
export default ModelTraining;
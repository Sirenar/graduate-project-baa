import './index.less';
import React, { useState } from 'react';
import { Tooltip, Descriptions, Typography, Menu, Dropdown, Input, Form, Button, Radio  } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import BoneImgCarousel from '../../subModules/boneImgCarousel';
import patientAvatar from '../../img/patient-avatar.png';
import callBtn from '../../img/callbtn.png';
import BulletMetric from '../../subModules/bulletMetric';
import RadarMetric from '../../subModules/radarMetric';
import HistoryRecords from '../../subModules/historyRecords';

import { labData, metrics } from '../../data';

const { Text } = Typography;

const EllipsisMiddle = ({ suffixCount, children }) => {
  const start = children.slice(0, children.length - suffixCount).trim();
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text style={{ maxWidth: '98%' }} ellipsis={{ suffix }}>
      {start}
    </Text>
  );
};

function DoctorPanel() {

  const [metricIndex, changeMetricIndex] = useState(0);
  const [currPatient, changeCurrentPatient] = useState(0);

  const changeMetric = index => () => {
    changeMetricIndex(index);
  }

  const changePatient = index => () => {
    changeCurrentPatient(index);
  }

  const labMenu = (
    <Menu>
      {
        metrics.map((item, index) => (
          <Menu.Item key={index} disabled={!item.available}> 
            <a target="_blank" rel="noopener noreferrer" onClick={changeMetric(index)}>
              {item.title}
            </a>
          </Menu.Item>
        ))
      }
    </Menu>
  );

  const PatientBox = ({list = []}) => {
    return list.map((patient, index) => {
      return (
        <div className={currPatient==index? 'waiting-patient-box-active': 'waiting-patient-box'} onClick={changePatient(index)}>
          <div className="avatar-box">
            <img src={patientAvatar}></img>
          </div>
          <div className='user-info'>
            <span className='patient-name'>{'李小华'}<br/></span>
            <span className="des">No.0{patient}  女  {6+patient}周岁  </span>
          </div>
          <Tooltip title="叫号">
            <div className='call-btn'>
              <img src={callBtn}></img>
            </div>
          </Tooltip>
        </div>
      )
    })
  }

  const [form] = Form.useForm();

  return (
    <div style={{display: 'flex'}}>
      <div className='object-patient-panel'>
        <div className='box base-info'>
          <div className='dark-box inner-blue'>
            <div className='upper'>
              <div className="avatar-box">
                <img src={patientAvatar}></img>
              </div>
              <div className='user-info'>
                <span>李小华</span><br/>
                <span className='des'>10周岁（2012.3）  </span>
              </div>
            </div>
            <Descriptions style={{lineHeight: '10px'}}>
              <Descriptions.Item label="身高" labelStyle={{color: '#B8DEFF'}}>135</Descriptions.Item>
              <Descriptions.Item label="体重" labelStyle={{color: '#B8DEFF'}}>38</Descriptions.Item>
              <Descriptions.Item label="血型" labelStyle={{color: '#B8DEFF'}}>AB+</Descriptions.Item>
            </Descriptions>
          </div>
          <Descriptions column={2} style={{padding: '24px'}}>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="就诊刷卡">AA021096X</Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="过去病史"> 
                <HistoryRecords></HistoryRecords>
            </Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="病人性质">智慧医保（职工）</Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="工作单位"> 
                重庆坤约文化有限公司
            </Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="联系地址">
              <EllipsisMiddle suffixCount={10} >
                1810000000（Tel）重庆市沙坪坝区大学城区四川美术学院虎溪校区造型艺术综合教学楼
              </EllipsisMiddle>
            </Descriptions.Item>
          </Descriptions>
        </div>
        <div className='box lab-info'>
          <div className='lab-title'>
            <h3 className='important'>实验室检查</h3>
            <Dropdown overlay={labMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {metrics[metricIndex].title} <DownOutlined />
              </a>
            </Dropdown>
          </div>
          {
            labData[metricIndex].map(item => (
              <div className='metric-box'>
                 <BulletMetric data={[item]}></BulletMetric>
              </div>
            ))
          }
        </div>
        <div className='box lab-overall'>
          <div className='lab-title'>
            <h3 className='important'>数据雷达</h3>
          </div>
          <div style={{height: '240px'}}>
            <RadarMetric></RadarMetric>
          </div>
        </div>
        <div className='box img-info'>
          <BoneImgCarousel></BoneImgCarousel>
        </div>
        <div className='box accessment-info'>
          <div className='lab-title'>
            <h3 className='important'>骨龄预测值</h3>
            <span className='des'>abc模型</span>
          </div>
          <div className='access-result'>
            <span className='access-age'>8</span>
            <span className='des'>周岁4月</span>
          </div>
        </div>
        <div className='box feedback'>
          <div className='lab-title'>
            <h3 className='important'>诊断结果</h3>
            <span className='des'>您的意见将用于回馈算法</span>
          </div>
          <Form
              form={form}
          >
            <Form.Item label="矮小症类型" name="layout" initialValue={'ghd'}>
              <Radio.Group>
                <Radio.Button value="ghd">GHD</Radio.Button>
                <Radio.Button value="iss">ISS</Radio.Button>
                <Radio.Button value="fss">FSS</Radio.Button>
                <Radio.Button value="not">非矮小症</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="骨龄" initialValue='8周岁4月'>
              <Input placeholder="input placeholder"/>
            </Form.Item>
            <Form.Item label="意见">
              <Input placeholder="input placeholder" />
            </Form.Item>
            {/* <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item> */}
          </Form>
        </div>
      </div>
      <div className='box patients-panel'>
        <h1 className='important'>候诊病人</h1>
        <span className='des'>今天上午</span>
        <PatientBox list={[1,2, 3, 4, 5, 6, 7, 8]}></PatientBox>
      </div>
    </div>
  );
}

export default DoctorPanel;
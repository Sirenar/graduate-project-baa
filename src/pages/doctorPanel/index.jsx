import './index.less';
import React, { useState } from 'react';
import { Tooltip, Descriptions, Typography, Menu, Dropdown, Input, Form, Radio  } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import BoneImgCarousel from '../../subModules/boneImgCarousel';
import patientAvatar from '../../img/patient-avatar.png';
import callBtn from '../../img/callbtn.png';
import BulletMetric from '../../subModules/bulletMetric';
import RadarMetric from '../../subModules/radarMetric';
import HistoryRecords from '../../subModules/historyRecords';
import ImgEditorPanel from "../../subModules/imgEditor";

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
  const [showImgViewPanel, changeShowImgViewPanel] = useState(false);

  const changeMetric = index => () => {
    changeMetricIndex(index);
  }

  const changePatient = index => () => {
    changeCurrentPatient(index);
  }

  const clickBoneImgHandler = img => () => {
    changeShowImgViewPanel(true);
  }

  const closeImgViewPanel = () => {
    changeShowImgViewPanel(false);
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
            <span className='patient-name'>{'?????????'}<br/></span>
            <span className="des">No.0{patient}  ???  {6+patient}??????  </span>
          </div>
          <Tooltip title="??????">
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
                <span>?????????</span><br/>
                <span className='des'>10?????????2012.3???  </span>
              </div>
            </div>
            <Descriptions style={{lineHeight: '10px'}}>
              <Descriptions.Item label="??????" labelStyle={{color: '#B8DEFF'}}>135</Descriptions.Item>
              <Descriptions.Item label="??????" labelStyle={{color: '#B8DEFF'}}>38</Descriptions.Item>
              <Descriptions.Item label="??????" labelStyle={{color: '#B8DEFF'}}>AB+</Descriptions.Item>
            </Descriptions>
          </div>
          <Descriptions column={2} style={{padding: '24px'}}>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="????????????">AA021096X</Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="????????????"> 
                <HistoryRecords></HistoryRecords>
            </Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="????????????">????????????????????????</Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="????????????"> 
                ??????????????????????????????
            </Descriptions.Item>
            <Descriptions.Item labelStyle={{color: '#8F929D'}} label="????????????">
              <EllipsisMiddle suffixCount={10} >
                1810000000???Tel?????????????????????????????????????????????????????????????????????????????????????????????
              </EllipsisMiddle>
            </Descriptions.Item>
          </Descriptions>
        </div>
        <div className='box lab-info'>
          <div className='lab-title'>
            <h3 className='important'>???????????????</h3>
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
            <h3 className='important'>????????????</h3>
          </div>
          <div style={{height: '240px'}}>
            <RadarMetric></RadarMetric>
          </div>
        </div>
        <div className='box img-info'>
          <BoneImgCarousel clickHandler={img => clickBoneImgHandler(img)}></BoneImgCarousel>
        </div>
        <div className='box accessment-info'>
          <div className='lab-title'>
            <h3 className='important'>???????????????</h3>
            <span className='des'>abc??????</span>
          </div>
          <div className='access-result'>
            <span className='access-age'>8</span>
            <span className='des'>??????4???</span>
          </div>
        </div>
        <div className='box feedback'>
          <div className='lab-title'>
            <h3 className='important'>????????????</h3>
            <span className='des'>?????????????????????????????????</span>
          </div>
          <Form
              form={form}
          >
            <Form.Item label="???????????????" name="layout" initialValue={'ghd'}>
              <Radio.Group>
                <Radio.Button value="ghd">GHD</Radio.Button>
                <Radio.Button value="iss">ISS</Radio.Button>
                <Radio.Button value="fss">FSS</Radio.Button>
                <Radio.Button value="not">????????????</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="??????" initialValue='8??????4???'>
              <Input placeholder="input placeholder"/>
            </Form.Item>
            <Form.Item label="??????">
              <Input placeholder="input placeholder" />
            </Form.Item>
            {/* <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item> */}
          </Form>
        </div>
      </div>
      <div className='box patients-panel'>
        <h1 className='important'>????????????</h1>
        <span className='des'>????????????</span>
        <PatientBox list={[1,2, 3, 4, 5, 6, 7]}></PatientBox>
      </div>
      <div className={`img-view-panel-wrapper ${showImgViewPanel? 'active' : ''}`} onClick={ closeImgViewPanel }>
        <ImgEditorPanel></ImgEditorPanel>
      </div>
    </div>
  );
}

export default DoctorPanel;
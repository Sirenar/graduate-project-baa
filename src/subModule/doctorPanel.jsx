import './doctorPanel.less';
import React, { useState } from 'react';

import { Tooltip, Descriptions, Typography } from 'antd';

import patientAvatar from '../img/patient-avatar.png';
import callBtn from '../img/callbtn.png';

const { Text } = Typography;

const EllipsisMiddle = ({ suffixCount, children }) => {
  const start = children.slice(0, children.length - suffixCount).trim();
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text style={{ maxWidth: '100%' }} ellipsis={{ suffix }}>
      {start}
    </Text>
  );
};

function DoctorPanel() {

  const [fileList, changeFileList] = useState([]);

  const PatientBox = ({list}) => {
    list = list || [];
    return list.map(patient => {
      return (
        <div className='waiting-patient-box'>
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

  return (
    <div style={{display: 'flex'}}>
      <div className='object-patient-panel'>
        <div className='box base-info'>
          <div className='box inner-blue'>
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
            <Descriptions.Item label="就诊刷卡">AA021096X</Descriptions.Item>
            <Descriptions.Item label="工作单位">
              <EllipsisMiddle suffixCount={1}>
                重庆坤约文化有限公司
              </EllipsisMiddle>
            </Descriptions.Item>
            <Descriptions.Item label="病人性质">智慧医保（职工）</Descriptions.Item>
            <Descriptions.Item label="智慧医疗">市民卡</Descriptions.Item>
            <Descriptions.Item label="联系地址">
              <EllipsisMiddle suffixCount={12}>
                1810000000（Tel）重庆市沙坪坝区大学城区四川美术学院虎溪校区造型艺术综合教学楼
              </EllipsisMiddle>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
      <div className='box patients-panel'>
        <h1 className='important'>候诊病人</h1>
        <span className='des'>今天上午</span>
        <PatientBox list={[1,2, 3, 4, 5]}></PatientBox>
      </div>
    </div>
  );
}

export default DoctorPanel;
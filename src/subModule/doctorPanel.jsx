import './doctorPanel.less';
import React, { useState } from 'react';

import { Tooltip } from 'antd';

import patientAvatar from '../img/patient-avatar.png';
import callBtn from '../img/callbtn.png';

function DoctorPanel() {

  const [fileList, changeFileList] = useState([]);

  const PatientBox = ({list}) => {
    console.log('list? ', list);
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
    <>
      <div className='box patients-panel'>
        <h1 className='important'>候诊病人</h1>
        <span className='des'>今天上午</span>

        <PatientBox list={[1,2, 3, 4, 5]}></PatientBox>
      </div>
    </>
  );
}

export default DoctorPanel;
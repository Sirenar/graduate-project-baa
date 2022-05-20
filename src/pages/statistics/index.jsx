import './index.less';

import React, { useState } from 'react';
import { Modal, Button, Upload, message  } from 'antd';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
import GenderPie from '../../subModules/genderPie';
import GHDRose from '../../subModules/GHDRose';
import AgeColumn from '../../subModules/ageColumn';

import patientIcon from '../../img/patients.png';
import docsIcon from '../../img/photos.png';
import modelIcon from '../../img/models.png';
import applianceIcon from '../../img/appliance.png'; 
// import GHDRadialBar from '../../subModules/GHDRose';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

function StatisticsPanel() {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      
    return (
    <div style={{paddingRight: '24px'}}>
        <div className='top'>
            <h1 className='important'>Overview</h1>
            <div className='dark-box add-btn' onClick={showModal}>
                <PlusOutlined />
                导入数据
            </div>
        </div>
        <div className='content'>
            <div className='left-part'>
                <div className='box overview-numbers'>
                    <div className="avatar-box" style={{backgroundColor: '#EBF6F3'}}>
                        <img src={patientIcon}></img>
                    </div>
                    <div className='label'>
                        <span className='des'>病例人数<br/></span>
                        <span>{'1,708'}</span>
                    </div>
                </div>
                <div className='box overview-numbers'>
                    <div className="avatar-box" style={{backgroundColor: '#FFF2E7'}}>
                        <img src={docsIcon}></img>
                    </div>
                    <div className='label'>
                        <span className='des'>影像总数<br/></span>
                        <span>{'12,694'}</span>
                    </div>
                </div>
                <div className='box overview-numbers'>
                    <div className="avatar-box" style={{backgroundColor: '#E7F5FF'}}>
                        <img src={modelIcon}></img>
                    </div>
                    <div className='label'>
                        <span className='des'>模型数量<br/></span>
                        <span>{'36'}</span>
                    </div>
                </div>
                <div className='box overview-numbers'>
                    <div className="avatar-box" style={{backgroundColor: '#EBEBFF'}}>
                        <img src={applianceIcon}></img>
                    </div>
                    <div className='label'>
                        <span className='des'>预测采纳数<br/></span>
                        <span>{'71'}</span>
                    </div>
                </div>
                <div className='box age-column'>
                    <div><AgeColumn></AgeColumn></div>
                </div>
            </div>
            <div className='right-part'>
                <div className='box gender-panel'>
                    <h3 className='important'>病例男女比例</h3>
                    <GenderPie></GenderPie>
                </div>
                <div className='box gender-panel'>
                    <h3 className='important'>矮小症类型分布</h3>
                    <GHDRose></GHDRose>
                    {/* <GHDRadialBar></GHDRadialBar> */}
                </div>
            </div>
        </div>
        <Modal title="Upload Files" className='upload' visible={isModalVisible} onCancel={handleCancel} footer={null} maskClosable={false}>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
                </p>
            </Dragger>
            <Button type='primary' className='send-btn' onClick={handleOk}>Send</Button>
        </Modal>
    </div>
    )
}
export default StatisticsPanel;
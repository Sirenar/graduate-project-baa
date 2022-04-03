import './index.less';

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import GenderPie from '../../subModules/genderPie';
import GHDRose from '../../subModules/GHDRose';
import AgeColumn from '../../subModules/ageColumn';

import patientIcon from '../../img/patients.png';
import docsIcon from '../../img/photos.png';
import modelIcon from '../../img/models.png';
import applianceIcon from '../../img/appliance.png'; 
// import GHDRadialBar from '../../subModules/GHDRose';

function StatisticsPanel() {

    return (
    <div style={{paddingRight: '24px'}}>
        <div className='top'>
            <h1 className='important'>Overview</h1>
            <div className='dark-box add-btn'>
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
    </div>
    )
}
export default StatisticsPanel;
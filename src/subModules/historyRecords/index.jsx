import './index.less';
import React, { useState, useEffect } from 'react';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class HistoryRecords extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <a onClick={this.showDrawer}>
            查看档案
        </a>
        
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
            病患档案
          </p>
          <p className="site-description-item-profile-p">个人史</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="娩出方式" content="顺产" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="喂养方式" content="母乳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="出生体重" content="4kg" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="出生身长" content="21cm" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="是否早产及过期产" content="早产" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="有无窒息史" content="无" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="生长发育状况"
                content="SGA未实现追赶生长，性发育延迟。"
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">既往史</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="慢性病史" content="慢性肝肾疾病；特纳氏综合征" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="传染病史" content="肺结核" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="是否曾使用激素等影响骨代谢药物" content="否" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="主治医师" content={<a>Lin</a>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="药物使用史"
                content="曾长期外服糖皮质激素超过三年。"
              />
            </Col>
          </Row>
         
          <Divider />
          <p className="site-description-item-profile-p">家族史</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="父亲身高" content="168cm" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="母亲身高" content="152cm" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="矮小症家族史及遗传代谢病史"
                content="由于父母均存在体质性青春期延迟，存在家族性青春期延迟的可能。"
              />
            </Col>
          </Row>
        </Drawer>
      </>
    );
  }
}


export default HistoryRecords;

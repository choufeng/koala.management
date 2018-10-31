import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col} from 'antd';

class Index extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={24}> Hello Jon </Col>
        </Row>
      </div>
    )
  }
}

export default Index


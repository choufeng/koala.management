import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon, Row, Col } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.png';

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 <a href="https://ycc.im">YCC.IM</a> 技术服务
  </Fragment>
);

class UserLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ant Design Pro';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ant Design Pro`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <Row className={styles.content}>
          <Col span={8} className={styles.left}>
          </Col>
          <Col span={16} className={styles.right}>
            <div className={styles.lang}>
              <SelectLang />
            </div>
            <div className={styles.body}>
              {children}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserLayout;

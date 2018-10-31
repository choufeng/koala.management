import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'YCC.IM',
          title: 'YCCIM',
          href: 'https://ycc.im',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018 YCC.IM 技术服务
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;

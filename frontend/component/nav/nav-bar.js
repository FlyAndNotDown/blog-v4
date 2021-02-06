import React, { useState } from 'react';
import Style from './nav-bar.module.css';
import { Row, Col, Dropdown, Menu, Affix } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Constant } from '../../common/constant';
import { Logger } from '../../common/utils/logger';

export function NavBar(props) {
  const alwaysAffixed = !!props.alwaysAffixed;

  const [goneAnimationWorking, setGoneAnimationWorking] = useState(false);
  const [navBarAffixed, setNavBarAffixed] = useState(false);

  const onAffixedChange = (affixed) => {
    Logger.printDebug('callback', `affixed: ${affixed}`);
    setNavBarAffixed(affixed);
    setGoneAnimationWorking(true);
  };

  const navBarDropdownMenu = (
    <Menu>
      <Menu.Item
        className={Style.dropdownItem}>
        <a href={Constant.route.archive}>{Constant.text.archive}</a>
      </Menu.Item>
      <Menu.Item
        className={Style.dropdownItem}>
        <a href={Constant.route.tagSummary}>{Constant.text.tag}</a>
      </Menu.Item>
      <Menu.Item
        className={Style.dropdownItem}>
        <a href={Constant.route.message}>{Constant.text.message}</a>
      </Menu.Item>
      <Menu.Item
        className={Style.dropdownItem}>
        <a href={Constant.route.about}>{Constant.text.about}</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Affix offsetTop={0} onChange={onAffixedChange}>
      <Row className={alwaysAffixed ? Style.affixedConstant :
        (navBarAffixed ? Style.affixed : (goneAnimationWorking ? Style.normal : ''))}>
        <Col
          xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
          <Row className={Style.container}>
            <Col
              xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }}
              lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }} xxl={{ span: 4, offset: 0 }}>
              <Row id={'logo'} className={Style.logo}>
                <a href={Constant.route.index} className={Style.logoLink}>
                  <img
                    className={Style.logoImg}
                    src={Constant.resource.iconPureImg}
                    alt={Constant.text.logo}/>
                </a>
              </Row>
            </Col>
            <Col
              xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 20, offset: 0 }}
              lg={{ span: 20, offset: 0 }} xl={{ span: 20, offset: 0 }} xxl={{ span: 20, offset: 0 }}>
              <Row className={Style.nav}>
                <a href={Constant.route.archive} className={Style.navLink}>{Constant.text.archive}</a>
                <a href={Constant.route.tagSummary} className={Style.navLink}>{Constant.text.tag}</a>
                <a href={Constant.route.message} className={Style.navLink}>{Constant.text.message}</a>
                <a href={Constant.route.about} className={Style.navLink}>{Constant.text.about}</a>
              </Row>
            </Col>
            <Col
              xs={{ span: 20, offset: 0 }} sm={{ span: 20, offset: 0 }} md={{ span: 0, offset: 0 }}
              lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 0, offset: 0 }}>
              <Row className={Style.nav}>
                <Dropdown overlay={navBarDropdownMenu}>
                  <a className={Style.navLink}>{Constant.text.menu} <DownOutlined/></a>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Affix>
  );
}

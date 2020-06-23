import React from 'react';
import Color from '../common/style/color';
import Font from '../common/style/font';
import Align from '../common/style/align';
import { Button, Row, Col, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Constant from '../common/constant';
import Logger from '../common/utils/logger';
import '../common/style/global.css';
import Router from '../common/utils/router';

export default function() {
    const style = {
        navBar: {
            height: Align.navBarHeight,
            backgroundColor: Color.navBar
        },
        container: {
            height: '100%'
        },
        logo: {
            lineHeight: Align.navBarHeight,
            fontSize: Font.fontSize.navBarLogo,
            color: Color.navBarText,
            float: 'left'
        },
        nav: {
            lineHeight: Align.navBarHeight,
            float: 'right'
        },
        logoLink: {
            color: Color.navBarText
        },
        navLink: {
            fontSize: Font.fontSize.navBarLink,
            color: Color.navBarText,
            marginLeft: '4px'
        },
       navBtnSpan: {
            marginLeft: '4px'
        },
        navBarDropdownItem: {
            margin: '3px 5px'
        }
    };

    const navBarDropdownMenu = (
        <Menu>
            {Constant.other.navBtn.map((btn, key) => {
                Logger.printDebug('map', `create nav btn ${key}-${btn.name}`);
                return (
                    <Menu.Item
                        key={key}
                        style={style.navBarDropdownItem}>
                        <a href={btn.to}>{btn.name}</a>
                    </Menu.Item>
                );
            })}
            {Constant.other.navLink.map((link, key) => {
                Logger.printDebug('map', `create btn link ${key}-${link.name}`);
                return (
                    <Menu.Item
                        key={key}
                        style={style.navBarDropdownItem}>
                        <a href={link.to}>{link.name}</a>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    return (
        <Row style={style.navBar}>
            <Col
                xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }}
                lg={{ span: 22, offset: 1 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
                <Row style={style.container}>
                    <Col
                         xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }}
                         lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }} xxl={{ span: 4, offset: 0 }}>
                        <Row id={'logo'} style={style.logo}>
                            <a href={Constant.route.index} style={style.logoLink}>{Constant.text.logo}</a>
                        </Row>
                    </Col>
                    <Col
                         xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 20, offset: 0 }}
                         lg={{ span: 20, offset: 0 }} xl={{ span: 20, offset: 0 }} xxl={{ span: 20, offset: 0 }}>
                        <Row style={style.nav}>
                            {Constant.other.navLink.map((link, key) => {
                                Logger.printDebug('map', `create nav link ${key}-${link.name}`);
                                return (
                                    <a key={key} href={link.to} style={style.navLink}>{link.name}</a>
                                );
                            })}
                            <span style={style.navBtnSpan}>
                                {Constant.other.navBtn.map((btn, key) => {
                                    Logger.printDebug('map', `create nav btn ${key}-${btn.name}`);
                                    return (
                                        <Button
                                            key={key}
                                            type={'primary'}
                                            shape={'round'}
                                            onClick={(e) => {
                                                Logger.printDebug('btn', `btn ${btn.name} clicked`);
                                                Router.jumpTo(btn.to);
                                            }}>
                                            {btn.name}
                                        </Button>
                                    );
                                })}
                            </span>
                        </Row>
                    </Col>
                    <Col
                        xs={{ span: 20, offset: 0 }} sm={{ span: 20, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 0, offset: 0 }}>
                        <Row style={style.nav}>
                            <Dropdown overlay={navBarDropdownMenu}>
                                <a style={style.navLink}>{Constant.text.menu} <DownOutlined/></a>
                            </Dropdown>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

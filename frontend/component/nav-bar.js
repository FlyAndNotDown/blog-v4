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
        loginBtnSpan: {
            marginLeft: '4px'
        },
        navBarDropdownItem: {
            margin: '3px 5px'
        }
    };

    const onLoginBtnClicked = (e) => {
        Logger.printDebug('btn', 'login btn clicked');
        Router.jumpTo(Constant.loginRoute);
    };

    const navBarDropdownMenu = (
        <Menu>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.loginRoute}>{Constant.loginBtnText}</a>
            </Menu.Item>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.archivesRoute}>{Constant.archivesLinkText}</a>
            </Menu.Item>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.tagsRoute}>{Constant.tagsLinkText}</a>
            </Menu.Item>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.messagesRoute}>{Constant.messageLinkText}</a>
            </Menu.Item>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.worksRoute}>{Constant.worksLinkText}</a>
            </Menu.Item>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.friendsRoute}>{Constant.friendsLinkText}</a>
            </Menu.Item>
            <Menu.Item style={style.navBarDropdownItem}>
                <a href={Constant.aboutRoute}>{Constant.aboutLinkText}</a>
            </Menu.Item>
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
                            <a href={Constant.indexRoute} style={style.logoLink}>{Constant.logoText}</a>
                        </Row>
                    </Col>
                    <Col
                         xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 20, offset: 0 }}
                         lg={{ span: 20, offset: 0 }} xl={{ span: 20, offset: 0 }} xxl={{ span: 20, offset: 0 }}>
                        <Row style={style.nav}>
                            <a href={Constant.archivesRoute} style={style.navLink}>{Constant.archivesLinkText}</a>
                            <a href={Constant.tagsRoute} style={style.navLink}>{Constant.tagsLinkText}</a>
                            <a href={Constant.messagesRoute} style={style.navLink}>{Constant.messageLinkText}</a>
                            <a href={Constant.worksRoute} style={style.navLink}>{Constant.worksLinkText}</a>
                            <a href={Constant.friendsRoute} style={style.navLink}>{Constant.friendsLinkText}</a>
                            <a href={Constant.aboutRoute} style={style.navLink}>{Constant.aboutLinkText}</a>
                            <span style={style.loginBtnSpan}>
                                <Button
                                    type={'primary'} shape={'round'} onClick={onLoginBtnClicked}>
                                    {Constant.loginBtnText}
                                </Button>
                            </span>
                        </Row>
                    </Col>
                    <Col
                        xs={{ span: 20, offset: 0 }} sm={{ span: 20, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 0, offset: 0 }}>
                        <Row style={style.nav}>
                            <Dropdown overlay={navBarDropdownMenu}>
                                <a style={style.navLink}>{Constant.navBarDropdownText} <DownOutlined/></a>
                            </Dropdown>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

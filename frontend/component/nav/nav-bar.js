import React, { useState } from 'react';
import { Button, Row, Col, Dropdown, Menu, Affix, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Constant } from '../../common/constant';
import { Logger } from '../../common/utils/logger';
import { Router } from '../../common/utils/router';
import Style from './nav-bar.module.css';

export function NavBar(props) {
    const alwaysAffixed = !!props.alwaysAffixed;
    const user = props.user || {};

    const [goneAnimationWorking, setGoneAnimationWorking] = useState(false);
    const [navBarAffixed, setNavBarAffixed] = useState(false);

    const onLogoutLinkClick = e => {
        // TODO
    };
    const onLogoutBtnClick = e => {
        // TODO
    };

    const navBarDropdownMenu = (
        <Menu>
            {user.login ? (
                <Menu.Item
                    disabled={true}
                    className={Style.dropdownItem}>
                    {user.info.username}
                </Menu.Item>
            ) : (
                <Menu.Item
                    className={Style.dropdownItem}>
                    <a href={Constant.route.login}>{Constant.text.login}</a>
                </Menu.Item>
            )}
            {user.login && (
                <Menu.Item
                    onClick={onLogoutLinkClick}
                    className={Style.dropdownItem}>
                    {Constant.text.logout}
                </Menu.Item>
            )}
            <Menu.Item
                className={Style.dropdownItem}>
                <a href={Constant.route.archive}>{Constant.text.archive}</a>
            </Menu.Item>
            <Menu.Item
                className={Style.dropdownItem}>
                <a href={Constant.route.tag}>{Constant.text.tag}</a>
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

    const onAffixedChange = (affixed) => {
        Logger.printDebug('callback', `affixed: ${affixed}`);
        setNavBarAffixed(affixed);
        setGoneAnimationWorking(true);
    };

    const onBtnLoginClick = e => {
        Logger.printDebug('btn', `btn ${Constant.text.login} clicked`);
        Router.jumpTo(Constant.route.login);
    };

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
                                <a href={Constant.route.tag} className={Style.navLink}>{Constant.text.tag}</a>
                                <a href={Constant.route.message} className={Style.navLink}>{Constant.text.message}</a>
                                <a href={Constant.route.about} className={Style.navLink}>{Constant.text.about}</a>
                                <span className={Style.btnSpan}>
                                    {user.login ? (
                                        <Dropdown
                                            overlay={
                                                <Menu>
                                                    <Menu.Item
                                                        onClick={onBtnLoginClick}>
                                                        {Constant.text.logout}
                                                    </Menu.Item>
                                                </Menu>
                                            }>
                                            {user.info.avatar ? (
                                                <Avatar src={user.info.avatar} alt={'avatar'}/>
                                                ) : (
                                                <Avatar>{user.info.username[0].toUpperCase()}</Avatar>
                                            )}
                                        </Dropdown>
                                    ) : (
                                        <Button
                                        type={'primary'}
                                        shape={'round'}
                                        onClick={onBtnLoginClick}>
                                        {Constant.text.login}
                                        </Button>
                                    )}
                                </span>
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

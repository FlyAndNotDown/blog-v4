import React, { useState, useEffect } from 'react';
import Style from './nav-bar.module.css';
import { Button, Row, Col, Dropdown, Menu, Affix, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Constant } from '../../common/constant';
import { Logger } from '../../common/utils/logger';
import { Router } from '../../common/utils/router';
import { Request } from "../../common/utils/request";

export function NavBar(props) {
    const alwaysAffixed = !!props.alwaysAffixed;

    const [mounted, setMounted] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [userLogin, setUserLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [goneAnimationWorking, setGoneAnimationWorking] = useState(false);
    const [navBarAffixed, setNavBarAffixed] = useState(false);

    const username = userInfo.username || 'Null';
    const avatar = userInfo.avatar || '';

    useEffect(() => {
        if (mounted) {
            return;
        }
        setMounted(true);
        Request.get(Constant.backendRoute.userLogin)
            .then(data => {
                setFetched(true);
                if (!data.success) {
                    return;
                }
                setUserLogin(!!data.content.login);
                setUserInfo(data.content.info || {});
            });
    });

    const onLogoutBtnClick = async () => {
        await Request.delete(Constant.backendRoute.userLogin);
        Router.refresh();
    };

    const onAffixedChange = (affixed) => {
        Logger.printDebug('callback', `affixed: ${affixed}`);
        setNavBarAffixed(affixed);
        setGoneAnimationWorking(true);
    };

    const onLoginBtnClick = e => {
        Logger.printDebug('btn', `btn ${Constant.text.login} clicked`);
        Router.jumpTo(Constant.route.login);
    };

    const navBarDropdownMenu = (
        <Menu>
            {userLogin ? (
                <Menu.Item
                    disabled={true}
                    className={Style.dropdownItem}>
                    {username}
                </Menu.Item>
            ) : (
                <Menu.Item
                    className={Style.dropdownItem}>
                    <a href={Constant.route.login}>{Constant.text.login}</a>
                </Menu.Item>
            )}
            {userLogin && (
                <Menu.Item
                    onClick={onLogoutBtnClick}
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

    return fetched && (
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
                                <span className={Style.btnSpan}>
                                    {userLogin ? (
                                        <Dropdown
                                            overlay={
                                                <Menu>
                                                    <Menu.Item
                                                        onClick={onLogoutBtnClick}>
                                                        {Constant.text.logout}
                                                    </Menu.Item>
                                                </Menu>
                                            }>
                                            {userLogin.avatar ? (
                                                <Avatar src={avatar} alt={'avatar'}/>
                                                ) : (
                                                <Avatar>{username[0].toUpperCase()}</Avatar>
                                            )}
                                        </Dropdown>
                                    ) : (
                                        <Button
                                        type={'primary'}
                                        shape={'round'}
                                        onClick={onLoginBtnClick}>
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

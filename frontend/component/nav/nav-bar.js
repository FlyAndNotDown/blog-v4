import React, { useState } from 'react';
import { Button, Row, Col, Dropdown, Menu, Affix } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Constant from '../../common/constant';
import { Logger } from '../../common/utils/logger';
import { Router } from '../../common/utils/router';
import '../../common/style/global.css';
import '../../common/style/component/nav/nav-bar.css';

export function NavBar() {
    const [navBarAffixed, setNavBarAffixed] = useState(false);

    const navBarDropdownMenu = (
        <Menu>
            {Constant.other.navBtn.map((btn, key) => {
                return (
                    <Menu.Item
                        key={key}
                        className={'nav-bar-dropdown-item'}>
                        <a href={btn.to}>{btn.name}</a>
                    </Menu.Item>
                );
            })}
            {Constant.other.navLink.map((link, key) => {
                return (
                    <Menu.Item
                        key={key}
                        className={'nav-bar-dropdown-item'}>
                        <a href={link.to}>{link.name}</a>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    const onAffixedChange = (affixed) => {
        Logger.printDebug('callback', `affixed: ${affixed}`);
        setNavBarAffixed(affixed);
    };

    return (
        <Affix offsetTop={0} onChange={onAffixedChange}>
            <Row className={`nar-bar${navBarAffixed ? ' affixed' : ''}`}>
                <Col
                    xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
                    <Row className={'nav-bar-container'}>
                        <Col
                            xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }}
                            lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }} xxl={{ span: 4, offset: 0 }}>
                            <Row id={'logo'} className={'nav-bar-logo'}>
                                <a href={Constant.route.index} className={'nav-bar-logo-link'}>{Constant.text.logo}</a>
                            </Row>
                        </Col>
                        <Col
                            xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 20, offset: 0 }}
                            lg={{ span: 20, offset: 0 }} xl={{ span: 20, offset: 0 }} xxl={{ span: 20, offset: 0 }}>
                            <Row className={'nav-bar-nav'}>
                                {Constant.other.navLink.map((link, key) => {
                                    return (
                                        <a key={key} href={link.to} className={'nav-bar-nav-link'}>{link.name}</a>
                                    );
                                })}
                                <span className={'nav-bar-btn-span'}>
                                {Constant.other.navBtn.map((btn, key) => {
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
                            <Row className={'nav-bar-nav'}>
                                <Dropdown overlay={navBarDropdownMenu}>
                                    <a className={'nav-bar-nav-link'}>{Constant.text.menu} <DownOutlined/></a>
                                </Dropdown>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Affix>
    );
}

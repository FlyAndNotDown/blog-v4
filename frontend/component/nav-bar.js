import React from 'react';
import Color from '../common/style/color';
import Align from '../common/style/align';
import { Button, Row, Col } from 'antd';
import Constant from '../common/constant';
import '../common/style/global.css';

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
        fontSize: '25px',
        color: Color.navBarText,
        float: 'left'
    },
    nav: {
        lineHeight: Align.navBarHeight,
        float: 'right'
    },
    navLink: {
        fontSize: '15px',
        color: Color.navBarText,
        marginLeft: '4px'
    },
    loginBtnSpan: {
        marginLeft: '4px'
    }
};

function NavBar() {
    const onLoginBtnClicked = (e) => {
        
    };

    return (
        <Row id={'nav-bar'} style={style.navBar}>
            <Col id={'container-col'}
                xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }}
                lg={{ span: 22, offset: 1 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
                <Row id={'container'} style={style.container}>
                    <Col id={'logo-col'}
                         xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }}
                         lg={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} xxl={{ span: 12, offset: 0 }}>
                        <Row id={'logo'} style={style.logo}>
                            {Constant.logoText}
                        </Row>
                    </Col>
                    <Col id={'nav-col'}
                         xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }}
                         lg={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} xxl={{ span: 12, offset: 0 }}>
                        <Row id={'nav'} style={style.nav}>
                            <a href={Constant.archivesRoute} style={style.navLink}>{Constant.archivesLinkText}</a>
                            <a href={Constant.tagsRoute} style={style.navLink}>{Constant.tagsLinkText}</a>
                            <a href={Constant.messagesRoute} style={style.navLink}>{Constant.messageLinkText}</a>
                            <a href={Constant.worksRoute} style={style.navLink}>{Constant.worksLinkText}</a>
                            <a href={Constant.friendsRoute} style={style.navLink}>{Constant.friendsLinkText}</a>
                            <a href={Constant.aboutRoute} style={style.navLink}>{Constant.aboutLinkText}</a>
                            <span id={'login-btn-span'} style={style.loginBtnSpan}>
                                <Button id={'login-btn'}
                                    type={'primary'} shape={'round'} onClick={onLoginBtnClicked}>
                                    {Constant.loginBtnText}
                                </Button>
                            </span>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default NavBar;
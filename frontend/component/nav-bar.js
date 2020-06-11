import React from 'react';
import Color from '../common/style/color';
import '../common/style/global.css';
import { Row, Col } from 'antd';

const style = {
    navBar: {
        height: '64px',
        backgroundColor: Color.navBar
    },
    container: {
        height: '100%',
        backgroundColor: Color.test
    }
};

function NavBar() {
    return (
        <Row id={'nav-bar'} style={style.navBar}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }}
                lg={{ span: 22, offset: 1 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
                <Row id={'container'} style={style.container}>

                </Row>
            </Col>
        </Row>
    );
}

export default NavBar;
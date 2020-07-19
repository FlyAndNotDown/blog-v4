import React from 'react';
import '../../common/style/global.css';
import '../../common/style/pages/user/login.css';
import { Row, Col } from 'antd';
import { LoginForm } from '../../component/form/login-form';

function UserLogin() {
    return (
        <Row className={'login-container'}>
            <Col className={'login-col'}
                 xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                 lg={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }} xxl={{ span: 6, offset: 9 }}>
                <div className={'login-form-container'}>
                    <LoginForm/>
                </div>
            </Col>
        </Row>
    );
}

export default UserLogin;
import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { LoginForm } from '../../component/form/login-form';
import Style from './login.module.css';

function UserLoginPage() {
    const [isLoginMode, setLoginMode] = useState(true);

    const onLoginModeChanged = (loginModeValue) => { setLoginMode(loginModeValue); };
    const onLogin = async (email, password) => {
        // TODO
    };
    const onRegister = (username, email, password, validationCode) => {
        // TODO
    }
    const onFetchValidationCode = () => {
        // TODO
    };

    return (
        <Row className={Style.main}>
            <Col className={Style.col}
                 xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                 lg={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }} xxl={{ span: 6, offset: 9 }}>
                <div className={isLoginMode ? Style.container : Style.registerContainer}>
                    <LoginForm
                        onModeChange={onLoginModeChanged}
                        onLogin={onLogin}
                        onRegister={onRegister}
                        onFetchValidationCode={() => {}}/>
                </div>
            </Col>
        </Row>
    );
}

export default UserLoginPage;
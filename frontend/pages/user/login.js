import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { LoginForm } from '../../component/form/login-form';
import { Request } from "../../common/utils/request";
import { Constant } from "../../common/constant";
import { Router } from "../../common/utils/router";
import { sha512 } from 'hash.js';
import Style from './login.module.css';

function UserLoginPage() {
    const [isLoginMode, setLoginMode] = useState(true);

    const onLoginModeChanged = (loginModeValue) => { setLoginMode(loginModeValue); };
    const onLogin = async (email, password) => {
        let data = await Request.get(`${Constant.backendRoute.userSalt}/${email}`);
        if (!data.success) {
            message.error(data.reason || Constant.text.loginFailed);
            return;
        }

        data = await Request.post(Constant.backendRoute.userLoginEmail, {
            email,
            password: sha512().update(`${password}${data.content.salt}`).digest('hex')
        });
        if (!data.success) {
            message.error(data.reason || Constant.text.loginFailed);
            return;
        }
        message.info(Constant.text.loginSuccessfully);
        Router.jumpToHome();
    };
    const onRegister = async (email, username, password, validationCode) => {
        const data = await Request.post(Constant.backendRoute.userRegisterEmail, {
            email,
            username,
            password,
            validationCode
        });
        if (!data.success) {
            message.error(data.reason || Constant.text.registerFailed);
            return;
        }
        message.info(Constant.text.registerSuccessfully);
        Router.jumpToHome();
    }
    const onFetchValidationCode = async (email) => {
        const data = await Request.post(Constant.backendRoute.userValidationEmail, { email });
        if (data.success) {
            message.info(Constant.text.validationCodeSendSuccessfully);
        } else {
            message.error(data.reason || Constant.text.validationCodeSendFailed);
        }
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
                        onFetchValidationCode={onFetchValidationCode}/>
                </div>
            </Col>
        </Row>
    );
}

export default UserLoginPage;

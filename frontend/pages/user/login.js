import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { LoginForm } from '../../component/form/login-form';
import { Network } from "../../common/utils/network";
import { Logger } from "../../common/utils/logger";
import Style from './login.module.css';
import { BackendUtils } from "../../common/utils/backend";
import { Constant } from "../../common/constant";

function UserLoginPage() {
    const [isLoginMode, setLoginMode] = useState(true);

    const onLoginModeChanged = (loginModeValue) => { setLoginMode(loginModeValue); };
    const onLogin = async (email, password) => {
        // TODO
    };
    const onRegister = async (email, username, password, validationCode) => {
        // TODO
    }
    const onFetchValidationCode = async (email) => {
        // TODO fix bug
        let response = null;
        try {
            response = await Network.getInstance().post(BackendUtils.getUrl(Constant.backendRoute.userValidationEmail), { email });
        } catch (e) {
            Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
        }
        response = response || {};
        const data = response.data || {};
        if (data.success) {
            message.info(Constant.text.validationCodeSendSuccessful);
        } else {
            message.error(Constant.text.validationCodeSendFailed);
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
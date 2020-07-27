import React, { useState } from 'react';
import '../../common/style/component/form/login-form.css';
import { Button, Row, Col, Input } from 'antd';
import { Constant } from "../../common/constant";
import { UserOutlined, KeyOutlined, LoginOutlined } from '@ant-design/icons';

// TODO third part login
export function LoginForm(props) {
    const onLogin = props.onLogin;
    const onRegister = props.onRegister;

    const [isLoginMode, setLoginMode] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSwitchBtnClicked = () => {
        setLoginMode(!isLoginMode);
    };

    const onUsernameChanged = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChanged = (e) => {
        // TODO save hash value
        setPassword(e.target.value);
    };

    const onLoginInternal = () => {
        onLogin(username, password);
    };

    return (
        <Row className={'login-form'}>
            <Col span={24}>
                <div className={'login-form-title-row'}>
                    <span className={'login-form-icon-span'}>
                        <img
                            className={'login-form-icon-image'}
                            src={Constant.resource.iconImg}
                            alt={Constant.text.iconImgAlt}/>
                    </span>
                    <span className={'login-form-title-span'}>
                        {isLoginMode ?
                            Constant.text.loginFormLoginTitle :
                            Constant.text.loginFormRegisterTitle}
                    </span>
                </div>
                <div className={'login-form-username-row'}>
                    <Input
                        size={'large'}
                        prefix={<UserOutlined/>}
                        value={username}
                        onChange={onUsernameChanged}/>
                </div>
                <div className={'login-form-password-row'}>
                    <Input
                        size={'large'}
                        type={'password'}
                        prefix={<KeyOutlined/>}
                        value={password}
                        onChange={onPasswordChanged}/>
                </div>
                <div className={'login-form-action-row'}>
                    <Button
                        onClick={onLoginInternal}
                        size={'large'}
                        shape={'round'}
                        type={'primary'}
                        icon={<LoginOutlined/>}>
                        {Constant.text.loginFormLoginBtnContent}
                    </Button>
                    <Button
                        onClick={onSwitchBtnClicked}
                        className={'login-form-switch-btn'}
                        size={'large'}
                        type={'link'}>
                        {isLoginMode ?
                            Constant.text.loginFormSwitchToRegisterBtnContent :
                            Constant.text.loginFormSwitchToLoginBtnContent}
                    </Button>
                    <Button
                        className={'login-form-forget-btn'}
                        size={'large'}
                        type={'link'}>
                        {Constant.text.loginFormForgetBtnContent}
                    </Button>
                </div>
            </Col>
        </Row>
    );
}
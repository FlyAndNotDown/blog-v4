import React, { useState } from 'react';
import '../../common/style/component/form/login-form.css';
import { Button, Row, Col, Input } from 'antd';
import { Constant } from "../../common/constant";
import { UserOutlined, KeyOutlined, LoginOutlined, ThunderboltOutlined, QrcodeOutlined } from '@ant-design/icons';
import { sha512 } from 'hash.js';
import { KIcon } from '../common/KIcon';

// TODO third part login
export function LoginForm(props) {
    const onLogin = props.onLogin;
    const onRegister = props.onRegister;

    const [isLoginMode, setLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [validationCode, setValidationCode] = useState("");

    const onSwitchBtnClicked = () => { setLoginMode(!isLoginMode); };
    const onEmailChanged = (e) => { setEmail(e.target.value); };
    const onPasswordChanged = (e) => { setPassword(e.target.value); };
    const onRepeatChanged = (e) => { setRepeat(e.target.value); };
    const onValidationCodeChanged = (e) => { setValidationCode(e.target.value); };

    const onLoginInternal = () => {
        const passwordHash = sha512().update(password).digest('hex');
        onLogin(email, passwordHash);
    };

    const onRegisterInternal = () => {
        const passwordHash = sha512().update(password).digest('hex');
        const repeatHash = sha512().update(repeat).digest('hex');
        onRegister(email, passwordHash, repeatHash);
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
                <div className={'login-form-email-row'}>
                    <Input
                        size={'large'}
                        prefix={<UserOutlined/>}
                        placeholder={Constant.text.loginFormEmailPlaceholder}
                        value={email}
                        onChange={onEmailChanged}/>
                </div>
                <div className={'login-form-password-row'}>
                    <Input
                        size={'large'}
                        type={'password'}
                        prefix={<KeyOutlined/>}
                        placeholder={Constant.text.loginFormPasswordPlaceholder}
                        value={password}
                        onChange={onPasswordChanged}/>
                </div>
                {!isLoginMode && (
                    <div className={'login-form-repeat-row'}>
                        <Input
                            size={'large'}
                            type={'password'}
                            prefix={<KeyOutlined/>}
                            placeholder={Constant.text.loginFormRepeatPlaceholder}
                            value={repeat}
                            onChange={onRepeatChanged}/>
                    </div>
                )}
                {!isLoginMode && (
                    <div className={'login-form-validation-row'}>
                        <Input
                            size={'large'}
                            prefix={<QrcodeOutlined/>}
                            placeholder={Constant.text.loginFormValidationCodePlaceHolder}
                            value={validationCode}
                            onChange={onValidationCodeChanged}/>
                    </div>
                )}
                <div className={'login-form-action-row'}>
                    <Button
                        onClick={isLoginMode ? onLoginInternal : onRegisterInternal}
                        size={'large'}
                        shape={'round'}
                        type={'primary'}
                        icon={isLoginMode ? <LoginOutlined/> : <ThunderboltOutlined/>}>
                        {isLoginMode ?
                            Constant.text.loginFormLoginBtnContent :
                            Constant.text.loginFormRegisterBtnContent}
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
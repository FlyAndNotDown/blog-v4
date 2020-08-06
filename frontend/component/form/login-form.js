import React, { useState } from 'react';
import './login-form.module.less';
import { Button, Row, Col, Input } from 'antd';
import { Constant } from "../../common/constant";
import { UserOutlined, KeyOutlined, LoginOutlined, ThunderboltOutlined, QrcodeOutlined } from '@ant-design/icons';
import { sha512 } from 'hash.js';
import { UIKit } from '../../common/utils/ui';
import { Logger } from '../../common/utils/logger';
import { KIcon } from '../common/KIcon';
import { Router } from '../../common/utils/router';

export function LoginForm(props) {
    const onLogin = props.onLogin || (() => {});
    const onRegister = props.onRegister || (() => {});
    const onModeChange = props.onModeChange || (() => {});
    const onFetchValidationCode = props.onFetchValidationCode || (() => {});

    const [isLoginMode, setLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [validationCode, setValidationCode] = useState("");
    const [validationCodeTime, setValidationCodeTime] = useState(-1);

    const setLoginModeAndNotifyOutside = (value) => {
        setLoginMode(value);
        onModeChange(value);
    };

    const onSwitchBtnClicked = () => { setLoginModeAndNotifyOutside(!isLoginMode); };
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
    const onFetchValidationCodeBtnClicked = () => {
        Logger.printDebug('btn', `btn ${Constant.id.fetchValidationCodeBtn} clicked`);
        onFetchValidationCode();
    };
    const onFetchValidationCodeTimeRefresh = (value) => {
        Logger.printDebug('time', `value: ${value}`);
        setValidationCodeTime(value === 0 ? -1 : value);
    };


    return (
        <Row className={'login-form'}>
            <Col span={24}>
                <div className={'login-form-title-row'}>
                    <span className={'login-form-icon-span'}>
                        <a onClick={() => {
                                Router.jumpTo(Constant.route.index)
                            }}>
                            <img
                                className={'login-form-icon-image'}
                                src={Constant.resource.iconImg}
                                alt={Constant.text.iconImgAlt}/>
                        </a>
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
                            addonAfter={
                                <a className={'login-form-fetch-validation-code-link'}
                                    onClick={() => {
                                    UIKit.preventDoubleClick(
                                        Constant.id.fetchValidationCodeBtn,
                                        Constant.time.fetchValidationCodeTime,
                                        () => { onFetchValidationCodeBtnClicked(); },
                                        (time) => { onFetchValidationCodeTimeRefresh(time); });
                                }}>
                                    {validationCodeTime === -1 ?
                                        Constant.text.loginFormFetchValidationCode :
                                        validationCodeTime
                                    }
                                </a>
                            }
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
                <div className={'login-form-oauth-row'}>
                    {Constant.iteration.oauthIcon.map((icon, index) =>
                        <a
                            onClick={() => {
                                Router.jumpTo(icon.link);
                            }}
                            key={index}>
                            <KIcon className={'login-form-oauth-icon'} type={icon.key}/>
                        </a>
                    )}
                </div>
            </Col>
        </Row>
    );
}
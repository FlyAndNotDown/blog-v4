import React, { useState } from 'react';
import { Button, Row, Col, Input, message } from 'antd';
import { Constant } from "../../common/constant";
import { UserOutlined, KeyOutlined, LoginOutlined, ThunderboltOutlined, QrcodeOutlined, SmileOutlined } from '@ant-design/icons';
import { sha512 } from 'hash.js';
import { Logger } from '../../common/utils/logger';
import { KIcon } from '../common/KIcon';
import { Router } from '../../common/utils/router';
import { ValidationUtils } from '../../common/utils/validation';
import Style from './login-form.module.css';

export function LoginForm(props) {
    const onLogin = props.onLogin || (() => {});
    const onRegister = props.onRegister || (() => {});
    const onModeChange = props.onModeChange || (() => {});
    const onFetchValidationCode = props.onFetchValidationCode || (() => {});

    const [isLoginMode, setLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [validationCode, setValidationCode] = useState("");

    const setLoginModeAndNotifyOutside = (value) => {
        setLoginMode(value);
        onModeChange(value);
    };

    const onSwitchBtnClicked = () => { setLoginModeAndNotifyOutside(!isLoginMode); };
    const onEmailChanged = (e) => { setEmail(e.target.value); };
    const onUsernameChanged = (e) => { setUsername(e.target.value); };
    const onPasswordChanged = (e) => { setPassword(e.target.value); };
    const onRepeatChanged = (e) => { setRepeat(e.target.value); };
    const onValidationCodeChanged = (e) => { setValidationCode(e.target.value); };

    const onLoginInternal = () => {
        if (!ValidationUtils.validate(email, Constant.regex.email, Constant.text.validationErrInfoEmail)
            || !ValidationUtils.validate(password, Constant.regex.password, Constant.text.validationErrInfoPassword)) {
            return;
        }
        const passwordHash = sha512().update(password).digest('hex');
        onLogin(email, passwordHash);
    };
    const onRegisterInternal = () => {
        const passwordHash = sha512().update(password).digest('hex');
        const repeatHash = sha512().update(repeat).digest('hex');
        if (!ValidationUtils.validate(email, Constant.regex.email, Constant.text.validationErrInfoEmail)
            || !ValidationUtils.validate(username, Constant.regex.username, Constant.text.validationErrInfoUsername)
            || !ValidationUtils.validate(password, Constant.regex.password, Constant.text.validationErrInfoPassword)
            || !ValidationUtils.validate(validationCode, Constant.regex.validationCode, Constant.text.validationErrInfoValidationCode)) {
            return;
        }
        if (passwordHash !== repeatHash) {
            Logger.printDebug('bad repeat password');
            message.error(Constant.text.validationErrInfoRepeat);
            return;
        }
        onRegister(email, username, passwordHash, validationCode);
    };
    const onFetchValidationCodeBtnClicked = () => {
        if (!ValidationUtils.validate(email, Constant.regex.email, Constant.text.validationErrInfoEmail)) {
            return;
        }
        Logger.printDebug('btn', `fetchValidationCodeBtn clicked`);
        onFetchValidationCode(email);
    };

    return (
        <Row className={Style.main}>
            <Col span={24}>
                <div className={Style.titleRow}>
                    <span className={Style.iconSpan}>
                        <a onClick={() => {
                                Router.jumpTo(Constant.route.index)
                            }}>
                            <img
                                className={Style.iconImage}
                                src={Constant.resource.iconImg}
                                alt={Constant.text.iconImgAlt}/>
                        </a>
                    </span>
                    <span className={Style.titleSpan}>
                        {isLoginMode ?
                            Constant.text.loginFormLoginTitle :
                            Constant.text.loginFormRegisterTitle}
                    </span>
                </div>
                <div className={Style.emailRow}>
                    <Input
                        size={'large'}
                        prefix={<UserOutlined/>}
                        placeholder={Constant.text.loginFormEmailPlaceholder}
                        value={email}
                        onChange={onEmailChanged}/>
                </div>
                {!isLoginMode && (
                    <div className={Style.usernameRow}>
                        <Input
                            size={'large'}
                            prefix={<SmileOutlined/>}
                            placeholder={Constant.text.loginFormUsernamePlaceholder}
                            value={username}
                            onChange={onUsernameChanged}/>
                    </div>
                )}
                <div className={Style.passwordRow}>
                    <Input
                        size={'large'}
                        type={'password'}
                        prefix={<KeyOutlined/>}
                        placeholder={Constant.text.loginFormPasswordPlaceholder}
                        value={password}
                        onChange={onPasswordChanged}/>
                </div>
                {!isLoginMode && (
                    <div className={Style.repeatRow}>
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
                    <div className={Style.validationRow}>
                        <Input
                            size={'large'}
                            prefix={<QrcodeOutlined/>}
                            placeholder={Constant.text.loginFormValidationCodePlaceHolder}
                            value={validationCode}
                            addonAfter={
                                <a className={Style.fetchValidationCodeLink}
                                    onClick={onFetchValidationCodeBtnClicked}>
                                    {Constant.text.loginFormFetchValidationCode}
                                </a>
                            }
                            onChange={onValidationCodeChanged}/>
                    </div>
                )}
                <div className={Style.actionRow}>
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
                        className={Style.switchBtn}
                        size={'large'}
                        type={'link'}>
                        {isLoginMode ?
                            Constant.text.loginFormSwitchToRegisterBtnContent :
                            Constant.text.loginFormSwitchToLoginBtnContent}
                    </Button>
                    <Button
                        className={Style.forgetBtn}
                        size={'large'}
                        type={'link'}>
                        {Constant.text.loginFormForgetBtnContent}
                    </Button>
                </div>
                <div className={Style.oauthRow}>
                    <a><KIcon className={Style.oauthIcon} type={Constant.icon.key.githubDark} href={Constant.route.oauthGithub}/></a>
                    <a><KIcon className={Style.oauthIcon} type={Constant.icon.key.qqDark} href={Constant.route.oauthQQ}/></a>
                </div>
            </Col>
        </Row>
    );
}
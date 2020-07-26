import React from 'react';
import '../../common/style/component/form/login-form.css';
import { Row, Col, Input } from 'antd';
import { Constant } from "../../common/constant";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

export function LoginForm(props) {
    const onLogin = props.onLogin;
    const onRegister = props.onRegister;

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
                        {Constant.text.loginFormLoginTitle}
                    </span>
                </div>
                <div className={'login-form-username-row'}>
                    <Input size={'large'} prefix={<UserOutlined/>}/>
                </div>
                <div className={'login-form-password-row'}>
                    <Input size={'large'} prefix={<KeyOutlined/>}/>
                </div>
                <div className={'login-form-action-row'}>
                    <br/><br/>
                </div>
            </Col>
        </Row>
    );
}
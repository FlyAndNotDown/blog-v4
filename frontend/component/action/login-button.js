import React from 'react';
import Style from './login-button.module.css';
import { Button } from 'antd';
import { Router } from '../../common/utils/router';

export function LoginButton(props) {
    const children = props.children || null;

    const onClick = () => {
        Router.jumpToLogin();
    };

    return (
        <Button
            className={Style.main}
            type={'primary'}
            shape={'round'}
            onClick={onClick}>
            {children}
        </Button>
    );
}
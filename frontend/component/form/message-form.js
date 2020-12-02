import React, { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
import Style from './message-form.module.css';
import { Button, Input } from 'antd';
import { Constant } from '../../common/constant';

export function MessageForm(props) {
    const onSendMessage = props.onSendMessage || (() => {});

    const [message, setMessage] = useState('');

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const onSendMessageButtonClick = () => {
        onSendMessage(message);
    };

    return (
        <div className={Style.main}>
            <div className={Style.inputDiv}>
                <Input.TextArea
                    value={message}
                    onChange={onMessageChange}
                    placeholder={Constant.text.messageFormPlaceholder}
                    autoSize={{ minRows: 6 }}/>
            </div>
            <div className={Style.actionDiv}>
                <Button
                    type={'primary'}
                    shape={'round'}
                    icon={<SendOutlined/>}
                    onClick={onSendMessageButtonClick}>
                    {Constant.text.messageFormSendMessageButton}
                </Button>
            </div>
        </div>
    );
}
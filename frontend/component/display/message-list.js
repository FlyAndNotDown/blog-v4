import React from 'react';
import Style from './message-list.module.css';
import { Avatar, Comment, Tooltip } from 'antd';
import Moment from 'moment';
import { Constant } from '../../common/constant';

export function MessageList(props) {
    const messages = props.messages || [];

    const messageItemRenderer = (message, key) => {
        const author = message.author || {};
        const content = message.content || '';

        const datetimeRenderer = () => {
            const datetime = Moment(message.datetime, Constant.format.momentFormat);

            return (
                <Tooltip title={datetime.format(Constant.format.momentFormat)}>
                    <span>{datetime.fromNow()}</span>
                </Tooltip>
            );
        };

        const characterAvatarRenderer = () => <Avatar>{author.username[0].toUpperCase()}</Avatar>;
        const urlAvatarRenderer = () => <Avatar src={author.avatar} alt={author.username}/>;

        return (
            <div
                key={key}>
                <Comment
                    author={author.username}
                    avatar={author.avatar ? urlAvatarRenderer() : characterAvatarRenderer()}
                    content={content}
                    datetime={datetimeRenderer()}/>
            </div>
        );
    };

    return (
        <div className={Style.main}>
            <div className={Style.titleDiv}>
                {Constant.text.messageListTitle}
            </div>
            <div className={Style.messagesDiv}>
                {messages.map(messageItemRenderer)}
            </div>
        </div>
    );
}
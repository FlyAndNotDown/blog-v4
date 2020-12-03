import React from 'react';
import Style from './post-detail.module.css';
import Moment from 'moment';
import { Constant } from '../../common/constant';
import {Divider, Tooltip} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Router } from '../../common/utils/router';

export function PostDetail(props) {
    const title = props.title || '';
    const time = props.time || '';
    const tags = props.tags || [];
    const content = props.content || '';

    const datetime = Moment(time, Constant.format.momentFormat);

    const tagsRenderer = (tag, index) => {
        const onClick = () => {
            Router.jumpToTag(tag);
        };

        return index === 0 ? (
            <span className={Style.titleDivTagSpanFirst}>
                <a className={Style.normalColorLink} onClick={onClick}>{`#${tag}`}</a>
            </span>
        ) : (
            <span className={Style.titleDivTagSpan}>
                <a className={Style.normalColorLink} onClick={onClick}>{`#${tag}`}</a>
            </span>
        );
    };

    return (
        <div className={Style.main}>
            <div className={Style.titleDiv}>
                <div className={Style.titleDivTitleRow}>
                    {title}
                </div>
                <div className={Style.titleDivTagsRow}>
                    {tags.map(tagsRenderer)}
                </div>
                <div className={Style.titleDivTimeRow}>
                    <ClockCircleOutlined/>
                    <Tooltip
                        className={Style.titleDivTimeTooltip}
                        title={datetime.format(Constant.format.momentFormat)}>
                        {datetime.fromNow()}
                    </Tooltip>
                </div>
            </div>
            <Divider className={Style.divider}/>
            <div className={Style.contentDiv}>
                {content}
            </div>
        </div>
    );
}
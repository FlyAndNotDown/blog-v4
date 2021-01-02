import React from 'react';
import Style from './archive-item.module.css';
import { Router } from '../../common/utils/router';
import { Divider } from 'antd';

export function ArchiveItem(props) {
    const year = props.year || '0x00';
    const posts = props.posts || [];

    const linkClickedCallbackGenerator = (id) => {
        return () => {
            Router.jumpToPost(id);
        };
    };

    const itemRenderer = (item, index) => (
        <div key={index}>
            <div className={Style.item}>
                <span>
                    {item.date}
                </span>
                <a
                    className={Style.title}
                    onClick={linkClickedCallbackGenerator(item.id)}>
                    {item.title}
                </a>
            </div>
            {index === posts.length - 1 || <Divider className={Style.divider}/>}
        </div>
    );

    return (
        <div>
            <div className={Style.yearRow}>
                {year}
            </div>
            <div className={Style.blockRow}>
                {posts.map(itemRenderer)}
            </div>
        </div>
    );
}
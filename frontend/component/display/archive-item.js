import React from 'react';
import { List } from 'antd';
import Style from './archive-item.module.css';
import { Router } from '../../common/utils/router';

export function ArchiveItem(props) {
    const year = props.year || 'Null';
    const posts = props.posts || [];

    const linkClickedCallbackGenerator = (id) => {
        return () => {
            Router.jumpToPost(id);
        };
    };

    const itemRenderer = (item) => (
        <List.Item>
            <span>{item.time}</span>
            <a
                className={Style.itemLink}
                onClick={linkClickedCallbackGenerator(item.id)}>
                {item.name}
            </a>
        </List.Item>
    );

    return (
        <div>
            <div className={Style.yearRow}>
                {year}
            </div>
            <List
                bordered
                dataSource={posts}
                renderItem={itemRenderer}/>
        </div>
    );
}
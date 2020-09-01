import React from 'react';
import Style from './tag-list.module.css';
import { Tag } from './tag';

export function TagList(props) {
    const tags = props.tags || [];

    return (
        <div className={Style.main}>
            {tags.map((tag, key) => {
                return <Tag key={key}>{tag.name}</Tag>;
            })}
        </div>
    );
}
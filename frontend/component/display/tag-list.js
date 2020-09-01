import React from 'react';
import Style from './tag-list.module.css';
import { Tag } from './tag';

export function TagList(props) {
    const tags = props.tags || [];
    const onClick = props.onClick || (() => {});

    const tagGenerator = (tag, key) => {
        const onClickInternal = () => {
            onClick(key, tag);
        };

        return (
            <Tag
                key={key}
                onClick={onClickInternal}>
                {tag.name}
            </Tag>
        );
    };

    return (
        <div className={Style.main}>
            {tags.map((tag, key) => {
                return tagGenerator(tag, key);
            })}
        </div>
    );
}
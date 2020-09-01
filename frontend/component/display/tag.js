import React from 'react';
import Style from './tag.module.css';

export function Tag(props) {
    const onClick = props.onClick || (() => {});

    return (
        <div
            className={Style.main}
            onClick={onClick}>
            {props.children}
        </div>
    );
}
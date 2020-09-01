import React from 'react';
import Style from './tag.module.css';

export function Tag(props) {
    return (
        <div className={Style.main}>
            {props.children}
        </div>
    );
}
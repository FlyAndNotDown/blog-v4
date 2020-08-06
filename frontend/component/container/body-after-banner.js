import React from 'react';
import './body-after-banner.module.css';

export function BodyAfterBanner(props) {
    return (
        <div
            className={'body-after-banner'}>
            {props.children}
        </div>
    );
}
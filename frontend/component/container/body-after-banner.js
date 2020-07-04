import React from 'react';
import '../../common/style/component/container/body-after-banner.css';

export function BodyAfterBanner(props) {
    return (
        <div className={'body-after-banner'}>
            {props.children}
        </div>
    );
}
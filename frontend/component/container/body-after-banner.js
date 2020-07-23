import React from 'react';
import '../../common/style/component/container/body-after-banner.css';

export function BodyAfterBanner(props) {
    const background = props.background || '';

    return (
        <div
            className={'body-after-banner'}
            style={{ backgroundImage: `url(${background})` }}>
            {props.children}
        </div>
    );
}
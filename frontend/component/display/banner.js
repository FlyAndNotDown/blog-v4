import React from 'react';
import '../../common/style/component/display/banner.css';

export function Banner(props) {
    const background = props.background || '';
    const slogan = props.slogan || '';
    const subSlogan = props.subSlogan || '';

    return (
        <div className={'banner'} style={{ backgroundImage: `url(${background})` }}>
            <div className={'banner-slogan-container'}>
                <div className={'banner-slogan'}>{slogan}</div>
                <div className={'banner-sub-slogan'}>{subSlogan}</div>
            </div>
        </div>
    );
}
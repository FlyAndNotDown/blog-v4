import React from 'react';
import Logger from '../../common/utils/logger';
import Obj from '../../common/utils/obj';
import '../../common/style/component/display/banner.css';

export default function(props) {
    Logger.printDebug('props', `background: ${props.background}`);
    Logger.printDebug('props', `slogan: ${props.slogan}`);
    Logger.printDebug('props', `subSlogan: ${props.subSlogan}`);

    const background = Obj.get(props.background, '');
    const slogan = Obj.get(props.slogan, '');
    const subSlogan = Obj.get(props.subSlogan, '');

    return (
        <div className={'banner'} style={{ backgroundImage: `url(${background})` }}>
            <div className={'banner-slogan-container'}>
                <div className={'banner-slogan'}>{slogan}</div>
                <div className={'banner-sub-slogan'}>{subSlogan}</div>
            </div>
        </div>
    );
}
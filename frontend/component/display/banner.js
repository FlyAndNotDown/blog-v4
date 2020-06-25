import React from 'react';
import Logger from '../../common/utils/logger';
import Color from '../../common/style/color';
import Font from '../../common/style/font';
import Obj from '../../common/utils/obj';

export default function(props) {
    Logger.printDebug('props', `height: ${props.height}`);
    Logger.printDebug('props', `background: ${props.background}`);
    Logger.printDebug('props', `slogan: ${props.slogan}`);
    Logger.printDebug('props', `subSlogan: ${props.subSlogan}`);

    const height = Obj.get(props.height, '60%');
    const background = Obj.get(props.background, '');
    const slogan = Obj.get(props.slogan, '');
    const subSlogan = Obj.get(props.subSlogan, '');

    const style = {
        banner: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: height,
            zIndex: -1,
            backgroundSize: 'cover',
            backgroundImage: `url(${background})`
        },
        sloganContainer: {
            position: 'relative',
            top: '50%',
            left: '0',
            margin: '0 auto',
            textAlign: 'center',
            color: Color.bannerSlogan
        },
        slogan: {
            fontSize: Font.fontSize.bannerSlogan
        },
        subSlogan: {
            fontSize: Font.fontSize.bannerSubSlogan
        }
    };

    return (
        <div style={style.banner}>
            <div style={style.sloganContainer}>
                <div style={style.slogan}>{slogan}</div>
                <div style={style.subSlogan}>{subSlogan}</div>
            </div>
        </div>
    );
}
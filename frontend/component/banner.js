import React from 'react';
import Logger from '../common/utils/logger';
import Color from '../common/style/color';
import Font from '../common/style/font';

export default function Banner(props) {
    Logger.printDebug('props', `background: ${props.background}`);

    const style = {
        banner: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            zIndex: -1,
            backgroundImage: `url(${props.background})`
        },
        slogan: {
            position: 'relative',
            top: '50%',
            left: '0',
            margin: '0 auto',
            textAlign: 'center',
            color: Color.bannerSlogan,
            fontSize: Font.fontSize.bannerSlogan
        }
    };

    return (
        <div style={style.banner}>
            <div style={style.slogan}>
                离开世界前，一切都是过程
            </div>
        </div>
    );
}
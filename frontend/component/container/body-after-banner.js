import React from 'react';
import Logger from '../../common/utils/logger';
import Obj from '../../common/utils/obj';
import Color from '../../common/style/color';

export default function(props) {
    Logger.printDebug('props', `offset: ${props.offset}`);

    const offset = Obj.get(props.offset, '60%');

    const style = {
        bodyAfterBanner: {
            backgroundColor: Color.body,
            position: 'absolute',
            top: offset,
            width: '100%',
            minHeight: '1000px'
        }
    };

    return (
        <div style={style.bodyAfterBanner}>
            {props.children}
        </div>
    );
}
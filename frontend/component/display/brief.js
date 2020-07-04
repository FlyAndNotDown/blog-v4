import React from 'react';
import '../../common/style/component/display/brief.css';
import { Constant } from '../../common/constant';

export function Brief(props) {
    const avatar = props.avatar || '';

    return (
        <div className={'brief'}>
            <div className={'brief-avatar'}>
                <img
                    src={avatar}
                    className={'brief-avatar-img'}
                    alt={Constant.text.briefAvatarImgAlt}/>
            </div>
            <div className={'brief-container'}>
                <div className={'brief-name'}>
                    John Kindem
                </div>
            </div>
        </div>
    );
}
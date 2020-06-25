import React from 'react';

export default function(props) {
    const style = {
        bodyAfterBanner: {
            position: 'absolute',
            top: '60%',
            width: '100%'
        }
    };

    return (
        <div style={style.bodyAfterBanner}>
            {props.children}
        </div>
    );
}
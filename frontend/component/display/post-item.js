import React from 'react';
import Logger from '../../common/utils/logger';
import Obj from '../../common/utils/obj';
import Font from '../../common/style/font';
import Color from '../../common/style/color';

export default function(props) {
    Logger.printDebug('props', `title: ${props.title}`);
    Logger.printDebug('props', `description: ${props.description}`);
    Logger.printDebug('props', `time: ${props.time}`);
    Logger.printDebug('props', `tags: ${props.tags}`);

    const title = Obj.get(props.title, '');
    const description = Obj.get(props.description, '');
    const time = Obj.get(props.time, '');
    const tags = Obj.get(props.tags, []);

    const style = {
        postItem: {
            margin: '10px',
            backgroundColor: '#ffffff',
            padding: '25px',
            boxShadow: `0px 5px 3px ${Color.postItemShadow}`,
            borderRadius: '12px'
        },
        titleRow: {
            fontSize: Font.fontSize.postItemTitle,
            color: Color.postItemTitleText,
            marginBottom: '5px'
        },
        descriptionRow: {
            fontSize: Font.fontSize.postItemDescription,
            marginBottom: '10px'
        },
        otherRow: {
            fontSize: Font.fontSize.postItemOther
        },
        timeSpan: {
            float: 'left'
        },
        tagSpan: {
            float: 'right'
        }
    };

    return (
        <div style={style.postItem}>
            <div style={style.titleRow}>
                {title}
            </div>
            <div style={style.descriptionRow}>
                {description}
            </div>

        </div>
    );
}
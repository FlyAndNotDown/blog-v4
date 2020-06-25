import React, { useState } from 'react';
import Logger from '../../common/utils/logger';
import Obj from '../../common/utils/obj';
import Constant from '../../common/constant';
import Font from '../../common/style/font';
import Color from '../../common/style/color';

export default function(props) {
    const [titleHover, setTitleHover] = useState(false);

    Logger.printDebug('props', `id: ${props.id}`);
    Logger.printDebug('props', `title: ${props.title}`);
    Logger.printDebug('props', `description: ${props.description}`);
    Logger.printDebug('props', `time: ${props.time}`);
    Logger.printDebug('props', `tags: ${props.tags}`);

    const id = Obj.get(props.id, '0');
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
            marginBottom: '5px'
        },
        titleLink: {
            color: Color.postItemTitleText
        },
        titleLinkHover: {
            color: Color.postItemTitleTextHover
        },
        descriptionRow: {
            fontSize: Font.fontSize.postItemDescription,
            marginBottom: '10px'
        },
        otherRow: {
            fontSize: Font.fontSize.postItemOther,
            marginBottom: '30px'
        },
        timeSpan: {
            float: 'left',
        },
        tagSpan: {
            float: 'right',
        }
    };

    const onMouseEnterTitle = () => {
        Logger.printDebug('callback', 'mouse enter title');
        setTitleHover(true);
    };

    const onMouseLeaveTitle = () => {
        Logger.printDebug('callback', 'mouse leave title');
        setTitleHover(false);
    };

    return (
        <div style={style.postItem}>
            <div
                style={style.titleRow}
                onMouseEnter={onMouseEnterTitle}
                onMouseLeave={onMouseLeaveTitle}>
                <a
                    href={`${Constant.route.post}/${id}`}
                    style={titleHover ? style.titleLinkHover : style.titleLink}>
                    {title}
                </a>
            </div>
            <div style={style.descriptionRow}>
                {description}
            </div>
            <div style={style.otherRow}>
                <div style={style.timeSpan}>
                    {time}
                </div>
                <div style={style.tagSpan}>
                    {tags.map((tag, key) => <span key={key}>{`#${tag} `}</span>)}
                </div>
            </div>
        </div>
    );
}
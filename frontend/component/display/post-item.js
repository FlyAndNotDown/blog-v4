import React, { useState } from 'react';
import Logger from '../../common/utils/logger';
import Obj from '../../common/utils/obj';
import Constant from '../../common/constant';
import Font from '../../common/style/font';
import Color from '../../common/style/color';

export default function(props) {
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

    const defaultTagHovers = (() => {
        const result = [];
        tags.forEach(() => result.push(false));
        return result;
    })();

    const [hover, setHover] = useState(false);
    const [titleHover, setTitleHover] = useState(false);
    const [tagHovers, setTagHovers] = useState(defaultTagHovers);

    const style = {
        postItem: {
            margin: '10px',
            backgroundColor: Color.postItemBackground,
            padding: '25px',
            borderRadius: '12px',
            boxShadow: `0px 5px 3px ${Color.postItemShadow}`,
        },
        postItemHover: {
            margin: '10px',
            backgroundColor: Color.postItemBackground,
            padding: '25px',
            borderRadius: '12px',
            boxShadow: `0px 6px 3px ${Color.postItemShadow}`,
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
        },
        tagLink: {
            color: Color.postItemTagText
        },
        tagLinkHover: {
            color: Color.postItemTagTextHover
        }
    };

    const onMouseEnter = () => {
        Logger.printDebug('callback', 'mouse enter');
        setHover(true);
    };

    const onMouseLeave = () => {
        Logger.printDebug('callback', 'mouse leave');
        setHover(false);
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
        <div
            style={hover ? style.postItemHover : style.postItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
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
                    {tags.map((tag, key) => {
                        const onMouseEnterTag = () => {
                            Logger.printDebug('callback', `mouse enter tag ${tag}`);
                            setTagHovers(tagHoversOld => {
                                const result = [];
                                tagHoversOld.forEach(
                                    (tagHover, index) => result.push(index === key ? true : tagHover));
                                return result;
                            });
                        };

                        const onMouseLeaveTag = () => {
                            Logger.printDebug('callback', `mouse leave tag ${tag}`);
                            setTagHovers(tagHoversOld => {
                                const result = [];
                                tagHoversOld.forEach(
                                    (tagHover, index) => result.push(index === key ? false : tagHover));
                                return result;
                            });
                        };

                        return (
                            <a
                                key={key}
                                onMouseEnter={onMouseEnterTag}
                                onMouseLeave={onMouseLeaveTag}
                                style={tagHovers[key] ? style.tagLinkHover : style.tagLink}>
                                {`#${tag} `}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
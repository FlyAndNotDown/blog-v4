import Logger from '../../common/utils/logger';
import Obj from '../../common/utils/obj';
import Constant from '../../common/constant';
import '../../common/style/component/display/post-item.css';

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

    return (
        <div className={'post-item'}>
            <div className={'post-item-title-row'}>
                <a
                    href={`${Constant.route.post}/${id}`}
                    className={'post-item-title-link'}>
                    {title}
                </a>
            </div>
            <div className={'post-item-description-row'}>
                {description}
            </div>
            <div className={'post-item-other-row'}>
                <div className={'post-item-time-span'}>
                    {time}
                </div>
                <div className={'post-item-tag-span'}>
                    {tags.map((tag, key) => (
                        <a
                            key={key}
                            className={'post-item-tag-link'}>
                            {`#${tag} `}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
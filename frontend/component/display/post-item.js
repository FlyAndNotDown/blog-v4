import Constant from '../../common/constant';
import '../../common/style/component/display/post-item.css';

export function PostItem(props) {
    const id = props.id || 0;
    const title = props.title || '';
    const description = props.description || '';
    const time = props.time || '';
    const tags = props.tags || [];

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
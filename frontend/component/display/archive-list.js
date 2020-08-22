import React from 'react';
import Style from './archive-list.module.css';
import { ArchiveItem } from './archive-item';

export function ArchiveList(props) {
    const items = props.items || [];

    return (
        <div className={Style.main}>
            {items.map((item, key) => (
                <div className={Style.item}>
                    <ArchiveItem
                        key={key}
                        year={item.year}
                        posts={item.posts}/>
                </div>
            ))}
        </div>
    );
}
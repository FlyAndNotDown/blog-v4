import React, { useState } from 'react';
import Style from './tag-list.module.css';
import { Tag } from './tag';
import { Divider, Empty } from 'antd';
import { Router } from '../../common/utils/router';

export function TagList(props) {
    const tags = props.tags || [];

    const [posts, setPosts] = useState([]);
    const [currentTag, setCurrentTag] = useState('');

    const tagRenderer = (tag, key) => {
        const onClickInternal = () => {
            const currentTag = tags[key].name || '';
            const tPosts = tags[key].posts || [];

            setCurrentTag(currentTag);
            setPosts(tPosts);
        };

        return (
            <Tag
                key={key}
                onClick={onClickInternal}>
                {tag.name}
            </Tag>
        );
    };
    const postsRenderer = (post, key) => {
        const postTitleClickListenerGenerator = id => {
            return () => {
                Router.jumpToPost(id);
            };
        }

        return (
            <div
                key={key}>
                <div
                    className={Style.postItem}>
                    <a
                        className={Style.postTitle}
                        onClick={postTitleClickListenerGenerator(post.id)}>
                        {post.name}
                    </a>
                </div>
                {key === posts.length - 1 || <Divider className={Style.divider}/>}
            </div>
        );
    };

    return (
        <div className={Style.main}>
            <div>
                {tags.map(tagRenderer)}
            </div>
            <div className={Style.postsDiv}>
                <div
                    className={Style.postsDivTitle}>
                    {currentTag}
                </div>
                <div
                    className={Style.postsDivContent}>
                    {posts.length === 0 ? <Empty className={Style.postsEmpty}/> : posts.map(postsRenderer)}
                </div>
            </div>
        </div>
    );
}
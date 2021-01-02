import React, { useState } from 'react';
import Style from './tag-list.module.css';
import { Tag } from './tag';
import { Divider, Empty } from 'antd';
import { Router } from '../../common/utils/router';

export function TagList(props) {
    const initialId = props.initialId || 0;
    const summaries = props.summaries || [];

    let initialState = {
        posts: [],
        name: '',
    };
    for (let i = 0; i < summaries.length; i++) {
        if (initialId === summaries[i].id) {
            console.log('found');
            initialState = summaries[i];
            break;
        }
    }

    const [posts, setPosts] = useState(initialState.posts);
    const [currentTagName, setCurrentTagName] = useState(initialState.name);

    const tagRenderer = (tag, key) => {
        const onClickInternal = () => {
            const currentTag = summaries[key].name || '';
            const tPosts = summaries[key].posts || [];

            setCurrentTagName(currentTag);
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
                        {post.title}
                    </a>
                </div>
                {key === posts.length - 1 || <Divider className={Style.divider}/>}
            </div>
        );
    };

    return (
        <div className={Style.main}>
            <div>
                {summaries.map(tagRenderer)}
            </div>
            <div className={Style.postsDiv}>
                <div
                    className={Style.postsDivTitle}>
                    {currentTagName}
                </div>
                <div
                    className={Style.postsDivContent}>
                    {posts.length === 0 ? <Empty className={Style.postsEmpty}/> : posts.map(postsRenderer)}
                </div>
            </div>
        </div>
    );
}
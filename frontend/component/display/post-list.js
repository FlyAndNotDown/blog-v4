import React from 'react';
import './post-list.module.css';
import { Divider } from 'antd';
import { PostItem } from './post-item';

export function PostList(props) {
    const posts = props.posts || [];

    return (
        <div className={'post-list'}>
            {posts.map((post, key) => (
                <div key={key}>
                    <PostItem
                        title={post.title}
                        description={post.description}
                        time={post.time}
                        tags={post.tags}/>
                    <Divider className={'post-list-divider'}/>
                </div>
            ))}
        </div>
    );
}
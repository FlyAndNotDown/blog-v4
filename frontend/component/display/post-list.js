import React from 'react';
import { Divider } from 'antd';
import { PostItem } from './post-item';
import Style from './post-list.module.css';

export function PostList(props) {
    const posts = props.posts || [];

    return (
        <div className={Style.main}>
            {posts.map((post, key) => (
                <div key={key}>
                    <PostItem
                        title={post.title}
                        description={post.description}
                        time={post.time}
                        tags={post.tags}/>
                    <Divider className={Style.divider}/>
                </div>
            ))}
        </div>
    );
}
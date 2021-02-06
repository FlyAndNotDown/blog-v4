import React from 'react';
import { Divider } from 'antd';
import { PostItem } from './post-item';
import Style from './post-list.module.css';

export function PostList(props) {
  const summaries = props.summaries || [];

  return (
    <div className={Style.main}>
      {summaries.map((post, key) => (
        <div key={key}>
          <PostItem
            id={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}/>
          <Divider className={Style.divider}/>
        </div>
      ))}
    </div>
  );
}
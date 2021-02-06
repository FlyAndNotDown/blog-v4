import React from 'react';
import Style from './post-detail.module.css';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Router } from '../../common/utils/router';
import { MarkdownRenderer } from './markdown-renderer';

export function PostDetail(props) {
  const title = props.title || '';
  const date = props.date || '';
  const tags = props.tags || [];
  const content = props.content || '';

  const tagsRenderer = (tag, index) => {
    const onClick = () => {
      Router.jumpToTag(tag.id);
    };

    return index === 0 ? (
      <span
        key={index}
        className={Style.titleDivTagSpanFirst}>
                <a className={Style.normalColorLink} onClick={onClick}>{`#${tag.name}`}</a>
            </span>
    ) : (
      <span
        key={index}
        className={Style.titleDivTagSpan}>
                <a className={Style.normalColorLink} onClick={onClick}>{`#${tag.name}`}</a>
            </span>
    );
  };

  return (
    <div className={Style.main}>
      <div className={Style.titleDiv}>
        <div className={Style.titleDivTitleRow}>
          {title}
        </div>
        <div className={Style.titleDivTagsRow}>
          {tags.map(tagsRenderer)}
        </div>
        <div className={Style.titleDivTimeRow}>
          <ClockCircleOutlined/>
          <span
            className={Style.titleDivDateText}>
                        {date}
                    </span>
        </div>
      </div>
      <div className={Style.contentDiv}>
        <MarkdownRenderer source={content}/>
      </div>
    </div>
  );
}
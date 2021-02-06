import React from 'react';
import { Constant } from '../../common/constant';
import ClockCircleOutlined from '@ant-design/icons/lib/icons/ClockCircleOutlined';
import Style from './post-item.module.css';
import { Router } from "../../common/utils/router";

export function PostItem(props) {
  const id = props.id || 0;
  const title = props.title || '';
  const description = props.description || '';
  const date = props.date || '';
  const tags = props.tags || [];

  const tagRenderer = (tag, key) => {
    const onTagClicked = () => {
      Router.jumpToTag(tag.id);
    };

    return (
      <a
        onClick={onTagClicked}
        key={key}
        className={Style.tagLink}>
        {`#${tag.name} `}
      </a>
    );
  };

  return (
    <div className={Style.main}>
      <div className={Style.titleRow}>
        <a
          href={`${Constant.route.post}/${id}`}
          className={Style.titleLink}>
          {title}
        </a>
      </div>
      <div className={Style.descriptionRow}>
        {description}
      </div>
      <div className={Style.otherRow}>
        <div className={Style.timeSpan}>
                    <span>
                        <ClockCircleOutlined/>
                    </span>
          &nbsp;
          <span>
                        {date}
                    </span>
        </div>
        <div className={Style.tagSpan}>
          {tags.map(tagRenderer)}
        </div>
      </div>
    </div>
  );
}
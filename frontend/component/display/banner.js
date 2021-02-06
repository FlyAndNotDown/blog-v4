import React from 'react';
import Style from './banner.module.css';

export function Banner(props) {
  const background = props.background || '';
  const slogan = props.slogan || '';
  const subSlogan = props.subSlogan || '';

  return (
    <div className={Style.main} style={{ backgroundImage: `url(${background})` }}>
      <div className={Style.sloganContainer}>
        <div className={Style.slogan}>{slogan}</div>
        <div className={Style.subSlogan}>{subSlogan}</div>
      </div>
    </div>
  );
}
import React from 'react';
import Style from './body-after-banner.module.css';

export function BodyAfterBanner(props) {
  return (
    <div
      className={Style.main}>
      {props.children}
    </div>
  );
}
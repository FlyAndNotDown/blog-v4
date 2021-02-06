import React from 'react';
import Style from './body.module.css';

export function Body(props) {
  return (
    <div className={Style.main}>
      {props.children}
    </div>
  );
}
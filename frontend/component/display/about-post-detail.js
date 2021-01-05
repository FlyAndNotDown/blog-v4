import React from 'react';
import Style from './about-post-detail.module.css';
import { MarkdownRenderer } from "./markdown-renderer";

export function AboutPostDetail(props) {
    const source = props.source || '';

    return (
        <div className={Style.main}>
            <MarkdownRenderer source={source}/>
        </div>
    );
}
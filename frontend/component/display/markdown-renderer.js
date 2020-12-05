import React from 'react';
import Style from './markdown-renderer.module.css';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

export function MarkdownRenderer(props) {
    const source = props.source || '';

    const headingRenderer = object => {
        // TODO using hash value to link usage
    };
    const codeRenderer = object => (
        <SyntaxHighlighter
            customStyle={{ padding: '20px' }}
            language={object.language}>
            {object.value}
        </SyntaxHighlighter>
    );
    const linkRenderer = object => (
        <a href={object.href} target={'__blank'}>{object.children[0]}</a>
    );

    const renderers = {
        // heading: headingRenderer,
        code: codeRenderer,
        link: linkRenderer,
        linkReference: linkRenderer
    };

    return (
        <ReactMarkdown
            className={Style.markdownBody}
            escapeHtml={false}
            source={source}
            renderers={renderers}/>
    );
}
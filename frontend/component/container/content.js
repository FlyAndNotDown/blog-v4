import React from 'react';
import { Row, Col } from 'antd';
import Style from './content.module.css';

export function Content(props) {
    return (
        <Row className={Style.main}>
            <Col
                xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
                {props.children}
            </Col>
        </Row>
    );
}
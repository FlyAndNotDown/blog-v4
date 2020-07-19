import React from 'react';
import '../../common/style/component/form/login-form.css';
import { Row, Col } from 'antd';
import {Constant} from "../../common/constant";

export function LoginForm(props) {
    return (
        <Row className={'login-form'}>
            <Col span={24}>
                <div className={'login-form-title-row'}>
                    <img src={Constant.resource.iconImg} alt={Constant.text.iconImgAlt} width={50}/>
                </div>
            </Col>
        </Row>
    );
}
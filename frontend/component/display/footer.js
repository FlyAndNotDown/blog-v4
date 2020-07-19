import React from 'react';
import { Row, Col } from 'antd';
import { Constant } from '../../common/constant';
import '../../common/style/component/display/footer.css';
import { KIcon } from '../common/KIcon';

export function Footer(props) {
    const friends = props.friends || [];

    return (
        <div className={'footer'}>
            <Row className={'footer-content'}>
                <Col
                    xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                    lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
                    <div className={'footer-link-row'}>
                        {Constant.other.footerIconLink.map((footerIcon, index) =>
                            <a href={footerIcon.link} key={index}>
                                <KIcon className={'footer-link-icon'} type={footerIcon.key}/>
                            </a>
                        )}
                    </div>
                    <div className={'footer-friends-row'}>
                        {friends.map((friend, index) =>
                            <a className={'footer-friends-link'} href={friend.to} key={index}>
                                {friend.name}
                            </a>
                        )}
                    </div>
                </Col>
            </Row>
            <Row className={'footer-second'}>
                <Col
                    xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                    lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
                    <div className={'footer-contact-row'}>
                        <a href={`mailto:${Constant.text.footerContactMail}`} className={'footer-second-link-second'}>
                            {Constant.text.footerContact}
                        </a>
                        &nbsp;/&nbsp;
                        <a href={Constant.route.pay} className={'footer-second-link-second'}>
                            {Constant.text.footerPay}
                        </a>
                        &nbsp;/&nbsp;
                        <a href={Constant.route.ad} className={'footer-second-link-second'}>
                            {Constant.text.footerAdvertisement}
                        </a>
                        &nbsp;/&nbsp;
                        <a href={Constant.route.friend} className={'footer-second-link-second'}>
                            {Constant.text.footerGetFriend}
                        </a>
                    </div>
                    <div className={'footer-thanks-row'}>
                        {Constant.text.footerThemeTip}&nbsp;
                        <a href={Constant.text.footerThemeLink} className={'footer-second-link-second'}>
                            {Constant.text.footerTheme}
                        </a>,&nbsp;
                        {Constant.text.footerFrameworkTip}&nbsp;
                        <a href={Constant.text.footerThanksFrontendFrameworkLink} className={'footer-second-link-second'}>
                            {Constant.text.footerThanksFrontendFramework}
                        </a>&nbsp;
                        /&nbsp;
                        <a href={Constant.text.footerThanksApplicationFrameworkLink} className={'footer-second-link-second'}>
                            {Constant.text.footerThanksApplicationFramework}
                        </a>
                    </div>
                    <div className={'footer-copy-right-row'}>
                        {Constant.text.footerCopyRight}&nbsp;
                        <a href={Constant.text.footerSiteLink} className={'footer-second-link-primary'}>
                            {Constant.text.footerSite}
                        </a>&nbsp;
                        /&nbsp;
                        <a href={Constant.text.footerRecordationLink} className={'footer-second-link-primary'}>
                            {Constant.text.footerRecordation}
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

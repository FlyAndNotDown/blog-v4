import React from 'react';
import { Row, Col } from 'antd';
import { Constant } from '../../common/constant';
import { KIcon } from '../common/KIcon';
import Style from './footer.module.css';

export function Footer(props) {
  const friends = props.friends || [];

  return (
    <div className={Style.main}>
      <Row className={Style.content}>
        <Col
          xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
          lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
          <div className={Style.linkRow}>
            <a href={Constant.route.github}>
              <KIcon className={Style.linkIcon} type={Constant.icon.key.github}/>
            </a>
            <a href={Constant.route.npm}>
              <KIcon className={Style.linkIcon} type={Constant.icon.key.npm}/>
            </a>
            <a href={Constant.route.jianshu}>
              <KIcon className={Style.linkIcon} type={Constant.icon.key.jianshu}/>
            </a>
            <a href={Constant.route.zhihu}>
              <KIcon className={Style.linkIcon} type={Constant.icon.key.zhihu}/>
            </a>
            <a href={Constant.route.sf}>
              <KIcon className={Style.linkIcon} type={Constant.icon.key.sf}/>
            </a>
            <a href={Constant.route.juejin}>
              <KIcon className={Style.linkIcon} type={Constant.icon.key.juejin}/>
            </a>
          </div>
          <div className={Style.friendsRow}>
            {friends.map((friend, index) =>
              <a className={Style.friendsLink} href={friend.to} key={index}>
                {friend.name}
              </a>
            )}
          </div>
        </Col>
      </Row>
      <Row className={Style.second}>
        <Col
          xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
          lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
          <div className={Style.contactRow}>
            <a href={`mailto:${Constant.text.footerContactMail}`} className={Style.secondLinkSecond}>
              {Constant.text.footerContact}
            </a>
            &nbsp;/&nbsp;
            <a href={`mailto:${Constant.text.footerContactMail}`} className={Style.secondLinkSecond}>
              {Constant.text.footerGetFriend}
            </a>
          </div>
          <div className={Style.thanksRow}>
            {Constant.text.footerThemeTip}&nbsp;
            <a href={Constant.route.blogTheme} className={Style.secondLinkSecond}>
              {Constant.text.footerTheme}
            </a>,&nbsp;
            {Constant.text.footerFrameworkTip}&nbsp;
            <a href={Constant.route.blogFrontendFramework} className={Style.secondLinkSecond}>
              {Constant.text.footerThanksFrontendFramework}
            </a>&nbsp;
            /&nbsp;
            <a href={Constant.route.blogFramework} className={Style.secondLinkSecond}>
              {Constant.text.footerThanksApplicationFramework}
            </a>
          </div>
          <div className={Style.copyrightRow}>
            {Constant.text.footerCopyRight}&nbsp;
            <a href={Constant.route.site} className={Style.secondLinkPrimary}>
              {Constant.text.footerSite}
            </a>&nbsp;
            /&nbsp;
            <a href={Constant.route.recordation} className={Style.secondLinkPrimary}>
              {Constant.text.footerRecordation}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { Content } from '../component/container/content';
import { Footer } from '../component/display/footer';
import { MessageList } from '../component/display/message-list';
import { MessageForm } from '../component/form/message-form';
import { Constant } from '../common/constant';
import { LoginButton } from '../component/action/login-button';
import { Logger } from '../common/utils/logger';

function MessagePage(props) {
    const messages = props.messages || [];
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    const onSendMessage = (message) => {
        Logger.printDebug('callback', `onSendMessage: ${message}`);
    };

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>
                    {user.login ?
                        <MessageForm onSendMessage={onSendMessage}/> :
                        <LoginButton>{Constant.text.messagePageLoginButton}</LoginButton>
                    }
                    <MessageList messages={messages}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

MessagePage.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.message : {};
};

export default MessagePage;
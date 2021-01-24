import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Content } from '../component/container/content';
import { Footer } from '../component/display/footer';
import { MessageList } from '../component/display/message-list';
import { MessageForm } from '../component/form/message-form';
import { Constant } from '../common/constant';
import { LoginButton } from '../component/action/login-button';
import { Logger } from '../common/utils/logger';
import { Request } from "../common/utils/request";

function MessagePage(props) {
    const messages = props.messages || [];
    const friends = props.common.friends || [];

    const onSendMessage = (message) => {
        Logger.printDebug('callback', `onSendMessage: ${message}`);
    };

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>
                    <MessageForm onSendMessage={onSendMessage}/>
                    <LoginButton>{Constant.text.messagePageLoginButton}</LoginButton>
                    <MessageList messages={messages}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps() {
    const data = await Request.get(Constant.backendRoute.commentList);

    return {
        props: {
            message: data.success ? data.content.comments : [],
            common: {
                friends: []
            }
        }

    }
}

export default MessagePage;

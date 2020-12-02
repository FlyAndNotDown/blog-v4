import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { Content } from '../component/container/content';
import { Footer } from '../component/display/footer';
import { MessageList } from '../component/display/message-list';

function MessagePage(props) {
    const messages = props.messages || [];
    const friends = props.common.friends || [];

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>
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
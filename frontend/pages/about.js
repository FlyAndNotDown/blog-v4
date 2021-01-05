import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Content } from '../component/container/content';
import { Footer } from "../component/display/footer";

function AboutPage(props) {
    const source = props.source || '';
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>
                    {source}
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            source: '',
            common: {
                friends: [],
                user: {}
            }
        }
    }
}

export default AboutPage;

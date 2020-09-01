import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';

function TagPage() {
    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>

                </Content>
                <Footer/>
            </Body>
        </div>
    );
}

export default TagPage;

import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import {Body} from '../component/container/body';

function Message() {
    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>

            </Body>
        </div>
    );
}

export default Message;
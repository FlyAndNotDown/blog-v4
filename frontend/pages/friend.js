import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import {Body} from '../component/container/body';

function Friend() {
    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>

            </Body>
        </div>
    );
}

export default Friend;

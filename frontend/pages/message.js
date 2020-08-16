import React from 'react';
import { NavBar } from '../component/nav/nav-bar';

function Message() {
    return (
        <NavBar alwaysAffixed={true}/>
    );
}

export default Message;
import React from 'react';
import '../css/antd.less';
import Axios from "axios";
import Cookies from 'js-cookie';

Axios.interceptors.request.use(config => {
    config.withCredentials = true;
    config.headers['x-csrf-token'] = Cookies.get('csrfToken');
});

function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default App;
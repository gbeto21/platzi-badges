import React from 'react';
import Navbar from './Navbar';
// import { prependOnceListener } from 'cluster';

function Layout(props) {
    // const children = props.children;
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;

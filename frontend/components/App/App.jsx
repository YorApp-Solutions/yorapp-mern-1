import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import Banner from '../Banner/Banner.jsx';

const App = (props) => {
    const banner = props.banner[0];
    return (
        <Fragment>
            <Banner stores={banner} />
            abcd
        </Fragment>
    );
};

App.propTypes = {};

export default App;

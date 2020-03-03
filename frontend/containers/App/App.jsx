import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import AppComponent from '../../components/App/App.jsx';
import { store } from '../reducer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.res;
        this.state = {};
    }

    componentDidMount() {
        (async () => {
            this.res = await axios.get('/api/store/get');
            this.props.dispatchInput(this.res.data.result);
        })();
    }
    render() {
        return <AppComponent {...this.props} />;
    }
}

export const mapStateToProps = (state) => {
    return { stores: state.stores };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        dispatchInput: (res) => dispatch(store(res)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

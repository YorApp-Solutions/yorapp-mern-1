import React from 'react';
import { connect } from 'react-redux';
import YorStoreOfTheDayComponent from '../../components/YorStoreOfTheDay/YorStoreOfTheDay.jsx';
import Axios from 'axios';
import { yorStoreOfTheDayData } from './reducer.js';

class YorStoreOfTheDay extends React.Component {
    constructor() {
        super();
        this.res;
    }

    componentDidMount() {
        (async () => {
            this.res = await Axios.get('/api/yorStores/get');
            this.props.getYorStoreOfTheDayData(this.res.data[0]);
        })();
    }

    render() {
        const yorStores = this.props.yorStores[this.props.category];

        return <YorStoreOfTheDayComponent yorStores={yorStores} />;
    }
}

export const mapStateToProps = (state) => {
    return { yorStores: state.current.yorStores };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getYorStoreOfTheDayData: (res) => {
            dispatch(yorStoreOfTheDayData(res));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YorStoreOfTheDay);

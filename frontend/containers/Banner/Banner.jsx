import React from 'react';
import { connect } from 'react-redux';
import BannerComponent from '../../components/Banner/Banner.jsx';
import Axios from 'axios';
import { bannerData } from './reducer.js';

class Banner extends React.Component {
    constructor() {
        super();
        this.res;
    }

    componentDidMount() {
        (async () => {
            this.res = await Axios.get('/api/banner/get');
            this.props.getBannerData(this.res.data[0].stores);
        })();
    }

    render() {
        return <BannerComponent bannerData={this.props.banner} />;
    }
}

export const mapStateToProps = (state) => {
    return { banner: state.current.banner };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getBannerData: (res) => {
            dispatch(bannerData(res));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);

import React from 'react';
import { connect } from 'react-redux';
import OffersComponent from '../../components/Offers/Offers.jsx';
import Axios from 'axios';
import { offersData } from './reducer.js';

class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.res;
    }

    componentDidMount() {
        (async () => {
            this.res = await Axios.get('/api/offers/get');
            this.props.getoffersData(this.res.data);
        })();
    }

    render() {
        const category = this.props.category;
        let filteredOffers = [];
        if (category == 'all') {
            filteredOffers = this.props.offers;
        } else {
            filteredOffers = this.props.offers.filter(function(e) {
                return e.category == category;
            });
        }
        return <OffersComponent offers={filteredOffers} />;
    }
}

export const mapStateToProps = (state) => {
    return { offers: state.current.offers };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getoffersData: (res) => {
            dispatch(offersData(res));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);

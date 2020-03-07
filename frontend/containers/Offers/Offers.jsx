import React from 'react';
import { connect } from 'react-redux';
import OffersComponent from '../../components/Offers/Offers.jsx';
import Axios from 'axios';
import { offersData, offerData } from './reducer.js';

class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.res;
    }

    componentDidMount() {
        if (this.props.onLandingPage) {
            (async () => {
                this.res = await Axios.get('/api/offers/get');
                this.props.getoffersData(this.res.data);
            })();
        } else if (this.props.fromStore) {
            (async () => {
                this.res = await Axios.get(`/api/offers/${this.props.id}`);
                this.props.getofferData(this.res.data);
            })();
        } else return;
    }

    render() {
        if (this.props.fromStore == true) {
            const filteredOffers = this.props.offers.filter(
                (e) => e.assign_id == this.props.id
            );
            return <OffersComponent offers={filteredOffers} />;
        } else if (this.props.onLandingPage == true) {
            let filteredOffers = [];
            const category = this.props.category;
            if (category == 'all') {
                filteredOffers = this.props.offers;
            } else {
                filteredOffers = this.props.offers.filter(function(e) {
                    return e.category == category;
                });
            }
            return <OffersComponent offers={filteredOffers} />;
        } else return null;
    }
}

export const mapStateToProps = (state, ownProps) => {
    console.log(state);
    if (ownProps.fromStore == true) return { offers: state.current.offers };
    else if (ownProps.onLandingPage == true)
        return { offers: state.current.offers };
    else return null;
};

export const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.fromStore == true)
        return {
            getofferData: (res) => {
                dispatch(offerData(res));
            },
        };
    else if (ownProps.onLandingPage == true)
        return {
            getoffersData: (res) => {
                dispatch(offersData(res));
            },
        };
    else return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);

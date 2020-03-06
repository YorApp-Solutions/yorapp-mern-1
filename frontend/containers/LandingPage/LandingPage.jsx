import React, { Fragment } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
import Banner from '../Banner/Banner.jsx';
import YorStoreOfTheDay from '../YorStoreOfTheDay/YorStoreOfTheDay.jsx';
import Offers from '../Offers/Offers.jsx';
import FooterFilter from '../../components/FooterFilter/FooterFilter.jsx';
import PropTypes from 'prop-types';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category: 'all' };
        this.filterPage = this.filterPage.bind(this);
    }

    filterPage(e) {
        this.setState({
            category: e.target.value,
        });
    }
    render() {
        return (
            <Fragment>
                {this.state.category === 'all' && <Banner />}
                <YorStoreOfTheDay category={this.state.category} />
                <Offers category={this.state.category} />
                <FooterFilter
                    category={this.state.category}
                    filterPage={this.filterPage}
                />
            </Fragment>
        );
    }
}

// export const mapStateToProps = (state) => {
//     return {};
// };

// export const mapDispatchToProps = (dispatch) => {
//     return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

LandingPage.proptypes = {
    category: PropTypes.string,
};

LandingPage.defaultProps = {
    category: 'all',
};

export default LandingPage;

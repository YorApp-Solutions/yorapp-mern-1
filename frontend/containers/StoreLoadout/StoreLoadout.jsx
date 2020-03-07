import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { getStore, updateStoreDetails } from './reducer';
import StoreLoadoutComponent from '../../components/StoreLoadout/StoreLoadout.jsx';

class StoreLoadout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        (async () => {
            this.res = await Axios.get(
                `/api/stores/${this.props.match.params.id}`
            );

            this.props.getStoreInitialData(this.res.data[0]);
        })();
        (async () => {
            this.res = await Axios.get(
                `/api/storeDetails/${this.props.match.params.id}`
            );

            this.props.updateStore(this.res.data[0]);
        })();
    }

    render() {
        const { store, storeDetails } = this.props;
        const id = this.props.match.params.id;
        return (
            <Fragment>
                <StoreLoadoutComponent
                    id={id}
                    store={store}
                    storeDetails={storeDetails}
                />
            </Fragment>
        );
    }
}

export const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        store: state.current.stores[id],
        storeDetails: state.current.storeDetails[id],
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getStoreInitialData: (res) => {
            dispatch(getStore(res));
        },
        updateStore: (res) => {
            dispatch(updateStoreDetails(res));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreLoadout);

import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { updateStoreDetails } from './reducer';

class StoreLoadout extends React.Component {
    constructor(props) {
        super(props);
        this.createObj = this.createObj.bind(this);
    }

    componentDidMount() {
        (async () => {
            this.res = await Axios.get(`/api${this.props.location.pathname}`);
            this.props.updateStore(this.createObj(this.res.data));
        })();
    }

    createObj(resData) {
        const arr = {};
        const keys = resData.map((e) => e.assign_id);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const obj = {
                [key]: Object.assign({}, resData[i]),
            };
            Object.assign(arr, obj);
        }
        return arr;
    }

    render() {
        console.log(this.props);
        return null;
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
        updateStore: (res) => {
            dispatch(updateStoreDetails(res));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreLoadout);

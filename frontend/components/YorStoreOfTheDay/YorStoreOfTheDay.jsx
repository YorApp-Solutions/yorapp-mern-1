import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import StoreTile from '../StoreTile/StoreTile';

const YorStoreOfTheDay = (props) => {
    if (!isEmpty(props.yorStores)) {
        return (
            <Fragment>
                <div>
                    {props.yorStores.map((elem) => (
                        <div key={elem.assign_id}>
                            <StoreTile store={elem} />
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    } else return null; //insert skeleton?
};

export default YorStoreOfTheDay;

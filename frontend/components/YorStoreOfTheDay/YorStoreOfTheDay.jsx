import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

const YorStoreOfTheDay = (props) => {
    if (!isEmpty(props.yorStores)) {
        return (
            <Fragment>
                <ul>
                    {props.yorStores.map((elem) => (
                        <li key={elem.assign_id}>
                            {elem.assign_id}, {elem.category}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    } else return null; //insert skeleton?
};

export default YorStoreOfTheDay;

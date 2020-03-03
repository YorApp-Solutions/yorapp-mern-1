import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

const App = (props) => {
    console.log(props.stores);
    return (
        <Fragment>
            <ul>
                {!isEmpty(props.stores) &&
                    props.stores.map((elem) => (
                        <li key={elem.assign_id}>
                            {elem.name}
                            <ul>
                                <li>{elem.category}</li>
                                <li>
                                    <img
                                        src={elem.logo}
                                        height="30"
                                        width="30"
                                    />
                                </li>
                            </ul>
                        </li>
                    ))}
            </ul>
        </Fragment>
    );
};

App.propTypes = {};

export default App;

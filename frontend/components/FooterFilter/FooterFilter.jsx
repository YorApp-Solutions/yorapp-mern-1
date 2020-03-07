import React from 'react';

class FooterFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <button onClick={this.props.filterPage} value="all">
                    Home
                </button>
                <button onClick={this.props.filterPage} value="restaurant">
                    Restaurant
                </button>
                <button onClick={this.props.filterPage} value="fashion">
                    Fashion
                </button>
                <button onClick={this.props.filterPage} value="salon">
                    Salon
                </button>
                <button onClick={this.props.filterPage} value="hangouts">
                    Hangout
                </button>
            </footer>
        );
    }
}

export default FooterFilter;

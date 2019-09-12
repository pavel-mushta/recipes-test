import React, { Component } from 'react';
import Alert from "react-bootstrap/Alert";
import {connect} from "react-redux";

class ErrorGlobal extends Component {
    render() {
        return (
            <Alert variant="danger">
                Something gone wrong: {this.props.errorGlobalMsg}
            </Alert>
        );
    }
};

const mapStateToProps = (state) => ({ errorGlobalMsg: state.errorGlobalMsg});
ErrorGlobal = connect(mapStateToProps,null)(ErrorGlobal);
export default ErrorGlobal;
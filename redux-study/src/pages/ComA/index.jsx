import React, {Component} from 'react';
import {connect} from "react-redux";

class ComA extends Component {
    handleClick = () => {
        this.props.sendAction();
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                +
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: "add_action"
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ComA);
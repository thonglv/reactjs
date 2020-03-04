import React, { Component } from 'react';


class Chatbox extends Component {

    render() {
        const {textMessage} = this.props;
        // const textMessage= this.props.textMessage
        const {time, text} = textMessage;
        return (
            <div className="box">
                <div className="row d-flex justify-content-end">
                    <label >Me: </label>
                    <div className="text badge badge-primary text-wrap"> {text}</div>
                </div>
                <div className="row text-muted small d-flex justify-content-end">{time}</div>
            </div>

        );
    }
}

export default Chatbox;
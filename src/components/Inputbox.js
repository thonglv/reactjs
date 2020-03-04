import React, { Component } from 'react';
import * as actions from '../actions/actionCreator';
import {connect} from 'react-redux';

class Inputbox extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '', 
            time: '', 
            
        };
    }
    
    getText = (event)=> {
        this.setState({
            text: event.target.value,
        });
        

    }
    getDate = () => {
        let date = new Date();
        let time = date.getFullYear() + '-' + (date.getMonth() + 1) + "-" + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return time.toString();

    }
    sendData = ()=> {
        const {text} = this.state;
        const obj = {text: text, time: this.getDate()}
        this.props.submitMessage(obj);

        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div>
                <div className="inputbox">
                    <div className="row">
                        <input type="text" placeholder="" className="form-control" onChange={this.getText} value={this.state.text }/>
                        <button className="btn" onClick={this.sendData}>Gửi</button>
                    </div>
                  
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        submitMessage: (data) => {
            console.log(data);
            dispatch(actions.addData(data));
        }
    }
}
export default connect(null, mapDispatchToProps) (Inputbox);
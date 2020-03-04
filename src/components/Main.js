import React, { Component } from 'react';
import Chatbox from './Chatbox';
import Inputbox from './Inputbox';
import {connect} from 'react-redux';


class Main extends Component {
    render() {
        let {list} = this.props;
        list = list ? list : [];
        return (
            <div className="fra">
                <div className="container border border-sucess">
                    <div className="display">
                        {
                            list.map((item, index) => {
                                return <Chatbox key={index} textMessage={item}></Chatbox>
                            })
                        }

                    </div>
                    <div className="bottom-box">
                        <Inputbox></Inputbox>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = store => {
    console.log("state Main", store);
      return  {list: store.messages}
}
export default connect(mapStateToProps) (Main);

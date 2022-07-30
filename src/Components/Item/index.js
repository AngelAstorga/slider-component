import React from "react";
import "./item.css";

class Item extends React.Component{
    constructor(props){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="itemContainer">
                <div className="itemHead">
                    <img className="itemHead__image" src={this.props.image} alt="" />
                    <span className="itemHead__title">{this.props.title}</span>
                </div>
                <div className="itemBody">
                    <p className="itemBody__description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export {Item};
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
                item
            </div>
        );
    }
}

export {Item};
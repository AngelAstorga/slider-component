import React from "react";
import "./slider.css";

class Slider extends React.Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="sliderContainer">
                    {this.props.children}
                </div>
            </React.Fragment>
              );
    }
}

export {Slider};
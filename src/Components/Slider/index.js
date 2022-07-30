import React from "react";
import "./slider.css";

class Slider extends React.Component{

    constructor(props){
        super(props);

        this.state={
            counter:1
        }
    }

    handleRightClick=(e)=>{
        if(this.state.counter<=2 ){
            console.log(this.state.counter);
            const wrapper=document.getElementsByClassName("slider__wrapper").item(0)
            wrapper.style.transform="translate(-"+this.state.counter*100+"vw)";

            this.setState({
                counter: this.state.counter + 1
            });
        }

    }

    handleLeftClick=(e)=>{

        if(this.state.counter>=2 ){
            console.log(this.state.counter);
            const wrapper=document.getElementsByClassName("slider__wrapper").item(0)
            wrapper.style.transform="translate(-"+(this.state.counter -2)*100+"vw)";

            this.setState({
                counter: this.state.counter - 1
            });
        }
    }


    render(){
        return(
            <React.Fragment>
                <div className="sliderContainer">
                    <div onClick={this.handleRightClick} className="slider__rightControl">&gt;</div>
                    <div onClick={this.handleLeftClick} className="slider__leftControl">&lt;</div>
                    {this.props.children}
                </div>
            </React.Fragment>
              );
    }
}

export {Slider};
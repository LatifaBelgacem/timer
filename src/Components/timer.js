import React, { Component } from 'react';
import './timer.css';




class Timer extends Component {
    constructor(props){
        super(props)
        this.state=({
            min:"00",
            hh:"00",
            ss:"00"

        })
    }
    render() {
        return (
    <div>
        {/* <div className="time-static-container"> */}
        <div className="time-container">
             <div className="time-digits">
              {this.state.hh}:{this.state.min}:{this.state.ss}
             </div>
        <div className="time-inner-container">
             <div className="time-text-item">Hour</div>
             <div className="time-text-item">Minute</div>
             <div className="time-text-item">Second</div>
        </div>
    </div>  
    </div>         
// </div>
        );
    }
}

export default Timer;
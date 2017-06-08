import React, {Component} from 'react';
import SmokeMachine from './SmokeMachine';

class SmokeComponent extends Component{
    constructor(props){
        super(props);
    }
    emitSmoke(smokeMachine, canvasWidth, canvasHeight){
		smokeMachine.addsmoke(10,canvasHeight,50, 2, 0.5)
        smokeMachine.addsmoke(canvasWidth*0.5,canvasHeight,50, 2, 0.5)
		smokeMachine.addsmoke(canvasWidth-10,canvasHeight,50, 2, 0.5)
		setTimeout(function(){
            this.emitSmoke(smokeMachine, canvasWidth, canvasHeight)
        }.bind(this), 7000);
	}
    componentDidMount(){
        var canvas = document.getElementsByClassName('smoke-container')[0];
        var ctx = canvas.getContext('2d');
        var smokeMachine = SmokeMachine(ctx, [230, 255, 230], 0.3, 1.0, 50)
        smokeMachine.start();
        this.emitSmoke(smokeMachine, canvas.width, canvas.height);
    }

    render(){
        return(
            <canvas className="smoke-container"></canvas>
        )
    }
}

export default SmokeComponent;

import React, {Component} from 'react';
import SmokeMachine from './SmokeMachine';

class SmokeComponent extends Component{
    emitSmoke(smokeMachine){
		smokeMachine.addsmoke(300,200,50, 2, 0.5)
        smokeMachine.addsmoke(150,200,50, 2, 0.5)
		smokeMachine.addsmoke(0,200,50, 2, 0.5)
		setTimeout(function(){
            this.emitSmoke(smokeMachine)
        }.bind(this), 7000);
	}
    componentDidMount(){
        var canvas = document.getElementsByClassName('smoke-container')[0];
        var ctx = canvas.getContext('2d');
        var smokeMachine = SmokeMachine(ctx, [230, 255, 230], 0.3, 0.8, 50)
        smokeMachine.start();
        this.emitSmoke(smokeMachine);
    }

    render(){
        return(
            <canvas className="smoke-container"></canvas>
        )
    }
}

export default SmokeComponent;

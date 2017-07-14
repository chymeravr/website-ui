var React = require('react');

export class FallingFlakes extends React.Component{
    constructor(props){
        super(props);
    }
    layerRenderer(layerName, speedClassName, nFlakes){
        const className = "flake-layer animation "+layerName+" "+speedClassName;
        let flakes = [];
        for(let i=0; i<nFlakes; i++){
            flakes.push(this.flakeRenderer());
        }
        return(
            <div className={className}>
                {flakes}
            </div>
        );
    }
    flakeRenderer(){
        let classes = "flake";
        const style = {
            top: 1500*Math.random(),
            left: window.innerWidth*Math.random()
        }
        return(
            <div className={classes} style={style}>
            </div>
        );
    }
    render(){
        return(
            <div>
                {this.layerRenderer("first", "fast", 15)}
                {this.layerRenderer("first", "normal", 15)}
                {this.layerRenderer("first", "slow", 15)}
                {this.layerRenderer("second", "fast", 15)}
                {this.layerRenderer("second", "normal", 15)}
                {this.layerRenderer("second", "slow", 15)}
            </div>
        );
    }
}

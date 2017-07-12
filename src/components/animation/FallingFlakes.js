var React = require('react');
import ReactDOM from 'react-dom';
import{ScrollEventsGenerator} from './ScrollEventsGenerator';

/*
Flakes are arranged into layers. Each layer has a unique default speed and unique scrolling speed.
Default speed is used for automatic falling of flakes. While scrolling speed is used for movement
of flakes on scrolling.
*/

export class FallingFlakes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrollTop: 0,
            layers: this.props.layers.map(this.getInitializedLayer.bind(this))
        }
    }
    componentDidMount(){
        this.reference = ReactDOM.findDOMNode(this);
        this.intervalId = setInterval(this.handleTick.bind(this), 100);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    getInitializedLayer(layer){
        var flakeArray = [];
        for(let i=0; i<layer.n; i++){
            flakeArray.push(this.getInitializedFlake(layer.defaultFallingSpeed));
        }
        return {
            scrollSpeed: layer.scrollSpeed,
            flakes: flakeArray,
            displayClassName: layer.displayClassName
        }
    }
    getInitializedFlake(defaultFallingSpeed){
        return {
            defaultMovementVector: {
                x: (Math.random()-0.5)*defaultFallingSpeed,
                y: Math.random()*defaultFallingSpeed
            },
            position:{
                top: window.innerHeight*Math.random(),
                left: window.innerWidth*Math.random()
            }
        }
    }
    handleTick(){
        this.setState({
            scrollTop: this.state.scrollTop,
            layers: this.state.layers.map(this.handleTickForLayer.bind(this))
        });
    }
    handleTickForLayer(layer){
        return {
            scrollSpeed: layer.scrollSpeed,
            flakes: layer.flakes.map(this.handleTickForFlake),
            displayClassName: layer.displayClassName
        }
    }
    handleTickForFlake(flake){
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        let top = flake.position.top + flake.defaultMovementVector.y;
        if(top<0){
            top = top + windowHeight;
        }
        if(top>windowHeight){
            top = top-windowHeight;
        }
        let left = flake.position.left + flake.defaultMovementVector.x;
        if(left<0){
            left = left + windowWidth;
        }
        if(left>windowWidth){
            left = left-windowWidth;
        }
        return {
            defaultMovementVector: flake.defaultMovementVector,
            position:{
                top: top,
                left: left
            }
        }
    }
    handleScrollEvent(scrollState){
        const deltaScroll = scrollState.scrollTop - this.state.scrollTop;
        this.setState({
            scrollTop: scrollState.scrollTop,
            layers: this.state.layers.map(function(layer){
                return this.handleScrollForLayer(layer, deltaScroll, scrollState.windowHeight, scrollState.windowWidth);
            }.bind(this))
        });
    }
    handleScrollForLayer(layer, deltaScroll, windowHeight, windowWidth){
        return {
            scrollSpeed: layer.scrollSpeed,
            flakes: layer.flakes.map(function(flake){
                return this.handleScrollForFlake(flake, deltaScroll, layer.scrollSpeed, windowHeight, windowWidth);
            }.bind(this)),
            displayClassName: layer.displayClassName
        }
    }
    handleScrollForFlake(flake, deltaScroll, speed, windowHeight, windowWidth){
        let top = flake.position.top - deltaScroll*speed;
        if(top<0){
            top = top + windowHeight;
        }
        if(top>windowHeight){
            top = top-windowHeight;
        }
        return {
            defaultMovementVector: flake.defaultMovementVector,
            position:{
                top: top,
                left: flake.position.left
            }
        }
    }
    renderer(scrollState){
        const style = {
            height:"100%"
        }
        return(
            <div style={style}>
                {this.state.layers.map(this.layerRenderer.bind(this))}
            </div>
        );
    }
    layerRenderer(layer){
        return(
            <div>
                {layer.flakes.map(function(flake){
                    return this.flakeRenderer(flake, layer.displayClassName);
                }.bind(this))}
            </div>
        );
    }
    flakeRenderer(flake, displayClassName){
        let classes = "flake" + " " + displayClassName;
        const style = {
            position: "fixed",
            left: flake.position.left,
            top: flake.position.top
        }
        return(
            <div className={classes} style={style}>
            </div>
        );
    }
    render(){
        return(
            <ScrollEventsGenerator
                renderer={this.renderer.bind(this)}
                stateUpdater={this.handleScrollEvent.bind(this)}
                elementref={this.reference}
            />
        );
    }
}

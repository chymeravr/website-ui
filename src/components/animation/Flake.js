var React = require('react');
import ReactDOM from 'react-dom';
import{ScrollEventsGenerator} from './ScrollEventsGenerator';

export class Flake extends React.Component{
    constructor(props){
        super(props);
        this.renderer = this.renderer.bind(this);
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.handleTick = this.handleTick.bind(this);
        this.naturalMovementSpeed = this.props.naturalMovementSpeed;
        this.scrollSpeed = this.props.scrollSpeed;
        this.naturalMovementDirection = {
            x: (Math.random()-0.5)*this.naturalMovementSpeed,
            y: Math.random()*this.naturalMovementSpeed
        }
        this.layerToSizeMap = {
            "front": "small",
            "middle": "medium",
            "back": "large"
        }
        this.state = {
            scrollTop: 0,
            position:{
                top: window.innerHeight*Math.random(),
                left: window.innerWidth*Math.random()
            }
        }
    }
    componentDidMount(){
        this.reference = ReactDOM.findDOMNode(this);
        this.intervalId = setInterval(this.handleTick, 100);
    }
    handleTick(){
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        let top = this.state.position.top + this.naturalMovementDirection.y;
        if(top<0){
            top = top + windowHeight;
        }
        if(top>windowHeight){
            top = top-windowHeight;
        }
        let left = this.state.position.left + this.naturalMovementDirection.x;
        if(left<0){
            left = left + windowWidth;
        }
        if(left>windowWidth){
            left = left-windowWidth;
        }
        this.setState({
            scrollTop: this.state.scrollTop,
            position:{
                top: top,
                left: left
            }
        });
    }
    calculateNewPosition(deltaScroll, speed, windowHeight, windowWidth){
        let top = this.state.position.top - deltaScroll*speed;
        if(top<0){
            top = top + windowHeight;
        }
        if(top>windowHeight){
            top = top-windowHeight;
        }
        return ({
            top: top,
            left: this.state.position.left
        });
    }

    handleScrollEvent(scrollState){
        const deltaScroll = scrollState.scrollTop - this.state.scrollTop;
        const position = this.calculateNewPosition(deltaScroll, this.scrollSpeed, scrollState.windowHeight, scrollState.windowWidth);
        this.setState({
            scrollTop: scrollState.scrollTop,
            position :{
                top: position.top,
                left: position.left
            }
        });
    }

    renderer(scrollState){
        let classes = "flake" + " " + this.layerToSizeMap[this.props.layer];
        const style = {
            position: "fixed",
            left: this.state.position.left,
            top: this.state.position.top
        }
        return(
            <div className={classes} style={style}>
            </div>
        );
    }

    render(){
        return(
            <ScrollEventsGenerator
                renderer={this.renderer}
                stateUpdater={this.handleScrollEvent}
                elementref={this.reference}
            />
        );
    }
}

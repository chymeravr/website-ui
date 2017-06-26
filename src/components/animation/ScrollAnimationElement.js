var React = require('react');
import {ScrollFadeIn} from './ScrollFadeIn';

export var onScroll = "onScroll";
export var onInsideViewPort = "onInsideViewPort";

export class ScrollAnimationElement extends React.Component{
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollState : {
                verticalPosition: "None", // None, ElementBelowWindow, ElementTopInWindow, ElementTopBottomInWindow, ElementBottomInWindow, ElementAboveWindow
                horizontalPosition: "None" // None, ElementLeftOfWindow, ElementRightInWindow, ElementLeftRightInWindow, ElementLeftInWindow, ElementRightOfWindow
            },
            lastScrollState:{
                verticalPosition: "None",
                horizontalPosition: "None"
            },
            windowHeight: 0,
            windowWidth: 0,
            scrollTop: 0,
            scrollLeft: 0,
            elementTop: 0,
            elementLeft: 0,
            elementHeight: 0,
            elementWidth: 0
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(event){
        if(typeof(this.props.elementref) == 'undefined'){
            return;
        }
        let windowHeight = event.srcElement.body.offsetHeight;
        let windowWidth = event.srcElement.body.offsetWidth;
        let scrollTop = event.srcElement.body.scrollTop;
        let scrollLeft = event.srcElement.body.scrollLeft;
        let elementTop = this.props.elementref.offsetTop;
        let elementLeft = this.props.elementref.offsetLeft;
        let elementHeight = this.props.elementref.offsetHeight;
        let elementWidth = this.props.elementref.offsetWidth;

        let verticalPosition = this.state.verticlePosition;
        if(elementTop > (scrollTop+windowHeight)){
            verticalPosition = "ElementBelowWindow";
        }else if ((elementTop + elementHeight) < scrollTop) {
            verticalPosition = "ElementAboveWindow";
        }else if(elementTop>scrollTop && (elementTop+elementHeight < scrollTop+windowHeight)){
            verticalPosition = "ElementTopBottomInWindow";
        }else if(elementTop>scrollTop){
            verticalPosition = "ElementTopInWindow";
        }else {
            verticalPosition = "ElementBottomInWindow";
        }

        let horizontalPosition = this.state.horizontalPosition;
        if((elementLeft+elementWidth) < scrollLeft){
            horizontalPosition = "ElementLeftOfWindow";
        }else if (elementLeft > (scrollLeft+windowWidth)) {
            horizontalPosition = "ElementRightOfWindow"
        }else if (elementLeft > scrollLeft && (elementLeft+elementWidth) < (scrollLeft+windowWidth)){
            horizontalPosition = "ElementLeftRightInWindow";
        }else if (elementLeft > scrollLeft){
            horizontalPosition = "ElementLeftInWindow";
        }else{
            horizontalPosition = "ElementRightInWindow";
        }
        this.setState({
            scrollState : {
                verticalPosition: verticalPosition,
                horizontalPosition: horizontalPosition
            },
            lastScrollState:{
                verticalPosition: this.state.scrollState.verticalPosition,
                horizontalPosition: this.state.scrollState.horizontalPosition
            },
            windowHeight: windowHeight,
            windowWidth: windowWidth,
            scrollTop: scrollTop,
            scrollLeft: scrollLeft,
            elementTop: elementTop,
            elementLeft: elementLeft,
            elementHeight: elementHeight,
            elementWidth: elementWidth
        });
    }
    render(){
        return(
            <div>
                {this.props.animator(this.state)}
            </div>
        );
    }
}

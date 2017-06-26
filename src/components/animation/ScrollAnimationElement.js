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
        let marginFromTop = 0.0;
        let marginFromBottom = 0.0;
        let marginFromLeft = 0.0;
        let marginFromRight = 0.0;
        if(typeof(this.props.marginFromTop) != 'undefined'){
            marginFromTop = this.props.marginFromTop;
        }
        if(typeof(this.props.marginFromBottom) != 'undefined'){
            marginFromBottom = this.props.marginFromBottom;
        }
        if(typeof(this.props.marginFromLeft) != 'undefined'){
            marginFromLeft = this.props.marginFromLeft;
        }
        if(typeof(this.props.marginFromRight) != 'undefined'){
            marginFromRight = this.props.marginFromRight;
        }

        let windowHeight = event.srcElement.body.offsetHeight;
        let windowWidth = event.srcElement.body.offsetWidth;
        let scrollTop = event.srcElement.body.scrollTop + marginFromTop*windowHeight;
        let scrollBottom = event.srcElement.body.scrollTop + (1-marginFromBottom)*windowHeight;
        let scrollLeft = event.srcElement.body.scrollLeft + marginFromLeft*windowWidth;
        let scrollRight = event.srcElement.body.scrollLeft + (1-marginFromLeft)*windowWidth;
        let elementTop = this.props.elementref.offsetTop;
        let elementLeft = this.props.elementref.offsetLeft;
        let elementHeight = this.props.elementref.offsetHeight;
        let elementWidth = this.props.elementref.offsetWidth;
        let elementBottom = elementTop + elementHeight;
        let elementRight = elementLeft + elementWidth;

        let verticalPosition = this.state.scrollState.verticalPosition;
        let lastVerticalPosition = this.state.lastScrollState.verticalPosition;
        if(elementTop > scrollBottom){
            verticalPosition = "ElementBelowWindow";
        }else if (elementBottom < scrollTop) {
            verticalPosition = "ElementAboveWindow";
        }else if(elementTop>scrollTop && (elementBottom < scrollBottom)){
            verticalPosition = "ElementTopBottomInWindow";
        }else if(elementTop>scrollTop){
            verticalPosition = "ElementTopInWindow";
        }else {
            verticalPosition = "ElementBottomInWindow";
        }
        if(this.state.scrollState.verticalPosition !== verticalPosition){
            lastVerticalPosition = this.state.scrollState.verticalPosition;
        }

        let horizontalPosition = this.state.scrollState.horizontalPosition;
        let lastHorizontalPosition = this.state.lastScrollState.horizontalPosition;
        if(elementRight < scrollLeft){
            horizontalPosition = "ElementLeftOfWindow";
        }else if (elementLeft > scrollRight) {
            horizontalPosition = "ElementRightOfWindow"
        }else if (elementLeft > scrollLeft && elementRight < scrollRight){
            horizontalPosition = "ElementLeftRightInWindow";
        }else if (elementLeft > scrollLeft){
            horizontalPosition = "ElementLeftInWindow";
        }else{
            horizontalPosition = "ElementRightInWindow";
        }
        if(this.state.scrollState.horizontalPosition !== horizontalPosition){
            lastHorizontalPosition = this.state.scrollState.horizontalPosition;
        }
        this.setState({
            scrollState : {
                verticalPosition: verticalPosition,
                horizontalPosition: horizontalPosition
            },
            lastScrollState:{
                verticalPosition: lastVerticalPosition,
                horizontalPosition: lastHorizontalPosition
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
            this.props.animator(this.state)
        );
    }
}

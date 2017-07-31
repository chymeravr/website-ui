var React = require('react');
import ReactDOM from 'react-dom';
import {CSSTransitionGroup} from 'react-transition-group';

export class ScrollBasedTransition extends React.Component{
    constructor(props){
        super(props);
        this.renderer = this.renderer.bind(this);
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
        this.reference = ReactDOM.findDOMNode(this);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event){
        // if(typeof(this.props.elementref) == 'undefined'){
        //     return;
        // }

        let boundingRect = this.reference.getBoundingClientRect();
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
        if(typeof(this.props.marginFromLeft) != 'undefined'){//margin in form of fraction of the window width.. Events occur when scrolled pass the margin line
            marginFromLeft = this.props.marginFromLeft;
        }
        if(typeof(this.props.marginFromRight) != 'undefined'){
            marginFromRight = this.props.marginFromRight;
        }

        var target = event.target || event.srcElement;
        let windowHeight = target.scrollingElement.offsetHeight;
        let windowWidth = target.scrollingElement.offsetWidth;
        let scrollTop = target.scrollingElement.scrollTop + marginFromTop*windowHeight;
        let scrollBottom = target.scrollingElement.scrollTop + (1-marginFromBottom)*windowHeight;
        let scrollLeft = target.scrollingElement.scrollLeft + marginFromLeft*windowWidth;
        let scrollRight = target.scrollingElement.scrollLeft + (1-marginFromLeft)*windowWidth;
        let elementTop = target.scrollingElement.scrollTop + boundingRect.top;
        let elementLeft = target.scrollingElement.scrollLeft + boundingRect.left;
        let elementHeight = this.reference.offsetHeight;
        let elementWidth = this.reference.offsetWidth;
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
        const newState = {
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
        };

        this.setState(newState);
    }
    renderer(scrollState){
        const { Component, transitionClassName, marginFromTop, marginFromBottom, transitionDelay, ...componentProps } = this.props;
        let baseClassName = "scroll-transition";
        let delayClassName = "";
        if(typeof(this.props.transitionClassName)!='undefined'){
            baseClassName = this.props.transitionClassName;
        }
        if(typeof(this.props.transitionDelay)!='undefined'){
            delayClassName = "delay-"+this.props.transitionDelay;
        }
        const beforeTransitionEnter = baseClassName+"-before-enter";
        const transitionEnter = baseClassName+"-enter";
        const beforeTransitionLeave = baseClassName+"-before-leave";
        const transitionLeave = baseClassName+"-leave";

        const lastState = scrollState.lastScrollState.verticalPosition;
        const currentState = scrollState.scrollState.verticalPosition;
        let className = this.props.className;
        let visibleStates = ["ElementTopInWindow", "ElementTopBottomInWindow", "ElementBottomInWindow"];

        if(currentState === "None" && lastState==="None"){
            className += " " + beforeTransitionLeave;
        }
        if(lastState === "None" && visibleStates.indexOf(currentState)==-1){
            className += " " + beforeTransitionEnter;
        }
        else if(currentState === "None"  || lastState==="None" && visibleStates.indexOf(currentState)>-1){
            className += " " + beforeTransitionLeave;
        }
        else if(lastState==="ElementBelowWindow" && visibleStates.indexOf(currentState)>-1){
            className += " " + transitionEnter + " " + delayClassName;
        }else{
            className += " " + beforeTransitionLeave;
        }

        if(typeof(this.props.children) == 'undefined'){
            return (
                <this.props.Component
                    {...componentProps}
                    className={className}
                />
            );
        }else{
            return (
                <this.props.Component
                    {...componentProps}
                    className={className}
                    >
                        {this.props.children}
                </this.props.Component>
            );
        }
    }
    render(){
        return(
            this.renderer(this.state)
        );
    }
}

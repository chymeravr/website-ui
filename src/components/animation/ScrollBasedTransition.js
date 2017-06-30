var React = require('react');
import ReactDOM from 'react-dom';
import {ScrollEventsGenerator} from './ScrollEventsGenerator';
import {CSSTransitionGroup} from 'react-transition-group';

export class ScrollBasedTransition extends React.Component{
    constructor(props){
        super(props);
        this.renderer = this.renderer.bind(this);
    }
    componentDidMount(){
        this.reference = ReactDOM.findDOMNode(this);
    }
    componentWillUnmount(){

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
        const beforeTransitionEnter = baseClassName+"-enter";
        const transitionEnter = baseClassName+"-enter";
        const beforeTransitionLeave = baseClassName+"-leave";
        const transitionLeave = baseClassName+"-leave";

        const lastState = scrollState.lastScrollState.verticalPosition;
        const currentState = scrollState.scrollState.verticalPosition;
        let className = this.props.className;
        let visibleStates = ["ElementTopInWindow", "ElementTopBottomInWindow", "ElementBottomInWindow"];
        if(lastState === "None" && visibleStates.indexOf(currentState)==-1){
            className += " " + beforeTransitionEnter;
        }
        if(visibleStates.indexOf(currentState) > -1){
            className += " " + transitionEnter + " " + delayClassName;
        }
        else{
            className += " " + transitionLeave + " " + delayClassName;
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
        let marginFromTop = 0.0;
        if(typeof(this.props.marginFromTop)!='undefined'){
            marginFromTop = this.props.marginFromTop;
        }
        let marginFromBottom = 0.0;
        if(typeof(this.props.marginFromBottom)!='undefined'){
            marginFromBottom = this.props.marginFromBottom;
        }
        return(
            <ScrollEventsGenerator renderer={this.renderer}
                 elementref={this.reference}
                 marginFromTop={marginFromTop}
                 marginFromBottom={marginFromBottom}
              />
        );
    }
}

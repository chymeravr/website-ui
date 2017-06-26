var React = require('react');
import ReactDOM from 'react-dom';
import {ScrollAnimationElement} from './ScrollAnimationElement';
import {CSSTransitionGroup} from 'react-transition-group';

export class ScrollFadeIn extends React.Component{
    constructor(props){
        super(props);
        this.handleScrollState = this.handleScrollState.bind(this);
    }
    componentDidMount(){
        this.reference = ReactDOM.findDOMNode(this);
    }
    componentWillUnmount(){

    }
    handleScrollState(scrollState){
        console.log(scrollState.scrollState.verticalPosition + " " + scrollState.lastScrollState.verticalPosition);
        const { Component, ...componentProps } = this.props;
        let visibleStates = ["ElementTopInWindow", "ElementTopBottomInWindow", "ElementBottomInWindow"];
        let className = "";
        if(visibleStates.indexOf(scrollState.scrollState.verticalPosition) > -1){
            className += "fadein-enter " + "fadein-enter-active";
        }
        else{
            className += "fadein-enter";
        }
        return (
            <this.props.Component
                {...componentProps}
                className={className}
                >
                    {this.props.children}
            </this.props.Component>
        );
    }
    render(){
        return(
            <ScrollAnimationElement animator={this.handleScrollState}
                 elementref={this.reference}
                 marginFromTop={0.15}
                 marginFromBottom={0.15}
              />
        );
    }
}

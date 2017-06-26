var React = require('react');
import {ScrollAnimationElement} from './ScrollAnimationElement';

export class ScrollFadeIn extends React.Component{
    constructor(props){
        super(props);
        this.handleScrollState = this.handleScrollState.bind(this);
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleScrollState(scrollState){
        return (
            <this.props.as ref={ elementref => { this.elementref = elementref;}} {...this.props}>
                <div>{scrollState.scrollTop}</div>
                {this.props.children}
            </this.props.as>
        );
    }
    render(){
        return(
            <ScrollAnimationElement animator={this.handleScrollState} elementref={this.elementref} />
        );
    }
}

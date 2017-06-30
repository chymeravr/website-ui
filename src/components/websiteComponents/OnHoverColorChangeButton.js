var React = require('react');
import {Button} from 'semantic-ui-react';

export class OnHoverColorChangeButton extends React.Component{
    constructor(props){
        super(props);
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.state = {
            isMouseOver: false
        }
    }
    handleOnMouseEnter(event){
        this.setState ({
            isMouseOver: true
        });
    }

    handleOnMouseLeave(event){
        this.setState ({
            isMouseOver: false
        })
    }
    render(){
        const additionalProps = {
            basic: !this.state.isMouseOver
        }
        return(
            <Button {...additionalProps} {...this.props} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} > {this.props.children} </Button>
        );
    }
}

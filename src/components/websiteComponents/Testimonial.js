var React = require('react');
import {Image} from 'semantic-ui-react';

export class Testimonial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className={"testimonial-container " + this.props.size + " " + this.props.align}>
                <div className="testimonial">
                    <div className="boldText">{this.props.name}</div>
                    <div>
                        {this.props.children}
                    </div>
                    <div className={"testimonial-arrow"}>
                    </div>
                    <img className={"profile-image"} src={this.props.profileImage} />
                </div>
            </div>
        );
    }
}

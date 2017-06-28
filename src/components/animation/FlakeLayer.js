var React = require('react');
import {Flake} from './Flake';

export class FlakeLayer extends React.Component{
    constructor(props){
        super(props);
    }
    generateFlakes(){
        const {n, ...remainingProps} = this.props;
        let flakes = [];
        for(let i=0; i<n; i++){
            flakes.push(<Flake {...remainingProps} />);
        }
        return flakes;
    }
    render(){
        return(
            <div>
                {this.generateFlakes()}
            </div>
        );
    }
}

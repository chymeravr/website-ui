var React = require('react');
import {FlakeLayer} from './FlakeLayer';

export class FallingFlakes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style = {
            height:"100%"
        }
        return(
            <div style={style}>
                <FlakeLayer layer="front" scrollSpeed={0.9} naturalMovementSpeed={2} n={20}/>
                <FlakeLayer layer="middle" scrollSpeed={0.5} naturalMovementSpeed={1} n={20}/>
                <FlakeLayer layer="back" scrollSpeed={0.3} naturalMovementSpeed={0.5} n={20}/>
            </div>
        );
    }
}

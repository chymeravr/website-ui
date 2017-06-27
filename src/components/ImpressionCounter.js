var React = require('react');

export class ImpressionCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            impressions: 100
        }
        this.handleIntervalTick = this.handleIntervalTick.bind(this);
    }
    componentDidMount(){
        var intervalId = setInterval(this.handleIntervalTick, 1000);
        this.handleIntervalTick();
        this.setState({
            impressions: this.state.impressions,
            intervalId: intervalId
        });
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }
    handleIntervalTick(){
        const a=0.0000000001, b=0.000005, c=0.0001, d=0.1, e=1;
        const currentTime = new Date().getTime() / (1000*3600);
        const initialTime = new Date(2016, 2, 1).getTime()/(1000*3600);
        const deltatime = currentTime-initialTime;
        let impressions = a*Math.pow(deltatime, 4) + b*Math.pow(deltatime, 3) + c*Math.pow(deltatime, 2)+ d*Math.pow(deltatime, 1) + e;
        this.setState({
            intervalId: this.state.intervalId,
            impressions: Number(Math.floor(impressions)).toLocaleString('en')
        });
    }
    render(){

        //const currentImpression = a*Math.pow()
        return(
            <span {...this.props}>{this.state.impressions}</span>
        );
    }
}

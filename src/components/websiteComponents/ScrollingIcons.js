var React = require('react');
import ReactDOM from 'react-dom';
import {Image, Icon} from 'semantic-ui-react';
import {AnimateLinearly} from '../animation/AnimateLinearly';

export class ScrollingIcons extends React.Component{
    constructor(props){
        super(props);
        this.leftScrollClickHandler = this.leftScrollClickHandler.bind(this);
        this.rightScrollClickHandler = this.rightScrollClickHandler.bind(this);
        this.animateScroll = this.animateScroll.bind(this);
        this.constantScroll = this.constantScroll.bind(this);
        this.constantScrollRestart = this.constantScrollRestart.bind(this);
    }
    componentDidMount(){
        this.scrollReference = ReactDOM.findDOMNode(this.refs.horizontalScroll);
        this.startConstantScroll();
    }
    componentWillUnmount(){
        clearInterval(this.constantScrollIntervalId);
    }
    leftScrollClickHandler(){
        AnimateLinearly(this.scrollReference.scrollLeft, this.scrollReference.scrollLeft-this.scrollReference.offsetWidth, 700, this.animateScroll, 0);
    }
    rightScrollClickHandler(){
        AnimateLinearly(this.scrollReference.scrollLeft, this.scrollReference.scrollLeft+this.scrollReference.offsetWidth, 700, this.animateScroll, this.scrollReference.scrollWidth);
    }
    animateScroll(value){
        this.scrollReference.scrollLeft = value;
    }
    constantScroll(){
        this.scrollReference.scrollLeft += 3;
        if(this.scrollReference.scrollLeft >= (this.scrollReference.scrollWidth-this.scrollReference.offsetWidth)){
            clearInterval(this.constantScrollIntervalId);
            setTimeout(function(){
                AnimateLinearly(this.scrollReference.scrollLeft, 0, 700, this.constantScrollRestart);
            }.bind(this), 1000)
        }
    }
    constantScrollRestart(value){
        this.scrollReference.scrollLeft = value;
        if(this.scrollReference.scrollLeft == 0)
            this.startConstantScroll();
    }
    startConstantScroll(){
        this.constantScrollIntervalId = setInterval(this.constantScroll, 100);
    }
    getIconRenderList(){
        let list = [];
        for(let i=1; i<=this.props.items; i++){
            list.push(
                <div className="icon-container">
                    <Image src={this.props.folder + "/" + i + ".png"} />
                </div>
            );
        }
        return list;
    }
    render(){
        const elements = this.props.visibleElements+"-items";
        const rootClassName = this.props.className + " scroll-container-horizontal "+elements;
        return(
            <div className={rootClassName}>
                <div className="arrow-container left" onClick={this.leftScrollClickHandler} >
                    <Icon size='large' name="chevron left" />
                </div>
                <div className="arrow-container right" onClick={this.rightScrollClickHandler} >
                    <Icon size='large' name="chevron right" />
                </div>
                <div className={"icon-slider-horizontal "+elements} ref="horizontalScroll">
                    {this.getIconRenderList()}
                </div>
            </div>
        );
    }
}

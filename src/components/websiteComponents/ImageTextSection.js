var React = require('react');
import {Grid, Header, Image, Button} from 'semantic-ui-react';
import {OnHoverColorChangeButton} from './OnHoverColorChangeButton';
import { Link } from 'react-router-dom';
import {ScrollBasedTransition} from '../animation/ScrollBasedTransition';

export class ImageTextSection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const imageComponent = (
            <ScrollBasedTransition transitionClassName="fade" marginFromBottom={0.15} marginFromTop={0.05} Component={Grid.Column} width={3}>
                <Image centered src={this.props.image} />
            </ScrollBasedTransition>
        );
        const textComponent = (
            <ScrollBasedTransition transitionClassName="fade" marginFromBottom={0.15} marginFromTop={0.05} Component={Grid.Column} width={4} transitionDelay="1">
                <Header as='h3'>
                    {this.props.content.header}
                </Header>
                <p>
                    {this.props.content.para}
                </p>
                {
                    (typeof(this.props.link) != 'undefined')?(
                        <OnHoverColorChangeButton as={Link} to={this.props.link.destination} color="blue">
                            {this.props.link.text}
                        </OnHoverColorChangeButton>
                    ):
                    (
                        null
                    )
                }
            </ScrollBasedTransition>
        );
        return(
            <Grid.Row verticalAlign="top" className={this.props.className}>
                {
                    (!this.props.reversed)?
                    (
                        imageComponent
                    ):
                    (
                        textComponent
                    )
                }
                <Grid.Column width={1}></Grid.Column>
                {
                    (!this.props.reversed)?
                    (
                        textComponent
                    ):
                    (
                        imageComponent
                    )
                }
            </Grid.Row>
        );
    }
}

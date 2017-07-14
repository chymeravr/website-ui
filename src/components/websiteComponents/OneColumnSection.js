var React = require('react');
import {Grid, Header, Image, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import {OnHoverColorChangeButton} from './OnHoverColorChangeButton';
import {ScrollBasedTransition} from '../animation/ScrollBasedTransition';

export class OneColumnSection extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Grid.Row className={this.props.className}>
                <ScrollBasedTransition transitionClassName="fade" marginFromBottom="0.15" Component={Grid} stackable centered verticalAlign='middle' >
                    {
                        (typeof(this.props.icon)!='undefined') ?
                        (
                            <Grid.Row columns={1}>
                                <Grid centered>
                                    <Grid.Row columns={1} style={{padding: 0}}>
                                        <Image centered src={this.props.icon.image} />
                                    </Grid.Row>
                                    {
                                        (typeof(this.props.icon.caption)!='undefined') ?
                                        (
                                            <Grid.Row columns={1} style={{padding: 0}}>
                                                <div className="smallText">{this.props.icon.caption}</div>
                                            </Grid.Row>
                                        ) :
                                        (
                                            null
                                        )
                                    }
                                </Grid>
                            </Grid.Row>
                        ) :
                        (
                            null
                        )
                    }

                    {
                        (typeof(this.props.content)!='undefined')?
                        (
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Header className="centerText" as='h2'>
                                        {this.props.content.header}
                                    </Header>
                                    <p className='largeText centerText'>
                                        {this.props.content.para}
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        ) :
                        (
                            null
                        )
                    }

                    {
                        (typeof(this.props.link) != 'undefined')?
                        (
                            <Grid.Row>
                                <OnHoverColorChangeButton as={Link} to={this.props.link.destination} color="blue">
                                    {this.props.link.text}
                                </OnHoverColorChangeButton>
                            </Grid.Row>
                        ) :
                        (
                            null
                        )
                    }
                </ScrollBasedTransition>
            </Grid.Row>
        );
    }
}

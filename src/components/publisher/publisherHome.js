var React = require('react');
var Link = require('react-router').Link
import { debug, callApiWithJwt } from '../../lib.js'
import { SignUp } from './../signUpRow'
import { Grid, Form, Button, Header, Input, Icon, Image, Message, Divider, Segment, Container, List } from 'semantic-ui-react'
import {OneColumnSection} from '../websiteComponents/OneColumnSection';
import {ImageTextSection} from '../websiteComponents/ImageTextSection';
import {ScrollingIcons} from '../websiteComponents/ScrollingIcons';
import {ScrollBasedTransition} from '../animation/ScrollBasedTransition';

export class PublisherHomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '/login',
            loggedIn: false
        };
    }

    componentDidMount() {
        document.title = 'Publisher | Chymera VR'
    }

    render() {
        const getImageWithCaption = (image, caption) => {
            return (
                <Grid.Column verticalAlign='bottom' width={2}>
                    <Image centered src={'/static/img/' + image} />
                    <h4>{caption}</h4>
                    {/* <p className="boldText caption">{caption}</p> */}
                </Grid.Column>
            )
        }

        const signUpHeader = (
            <Grid.Row>
                <Grid.Column width={12}>
                    <Header as='h3' className="centerText greyText">
                        Are you a VR Publisher looking to monetize?
                        <br />
                        <strong>Reach us!</strong>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        );

        return (
            <main className="Site-content">
                <Grid stackable centered verticalAlign='middle' style={{margin:0}}>
                    <Grid.Row className='page-header-section publisher-page-header image-background'>
                        <Grid.Column width={16}>
                            <Grid centered verticalAlign='middle'>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as='h1' inverted className='centerText'>Monetize VR content
                                        </Header>
                                        <Header as='h3' inverted className='centerText'>
                                            drive discovery
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: "1rem", paddingBottom: "1rem"}}></Grid.Row>
                    <OneColumnSection className="section"
                        icon = {
                            {
                                image: "/static/img/publisher/benefits.png",
                                caption: "Benefits"
                            }
                        }
                        content = {
                            {
                                header: "Earnings and happy users",
                                para: "Ad earnings come at the cost of poor user experience. But not anymore with VR. VR is a medium where you can get higher earnings while users stay engaged."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/publisher/high-earning.png'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"Higher earnings",
                                para:"Advertisers have realized that VR is an effective medium of advertising. They are getting significantly higher engagement with VR ads. Hence, CPMs and CPCs have soared high. So, relax and keep creating amazing VR content, while we take care of your monetization needs."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/publisher/user-experience.png'
                        rightAligned
                        content={
                            {
                                header:"Excellent user experience",
                                para:"Are you worried about ads upsetting your users? No problem. Chymera has put enough efforts so that you don't have to worry about that. We have taken excessive pains to get the user experience right. We manually screen each ad for its user experience. As a result, we have only 53% ad skip rates and 60% user satisfaction. Stop worrying, start earning."
                            }
                        }
                        link = {
                            {
                                text: "Case study",
                                destination: '/customers#caseStudy'
                            }
                        }
                    />
                    <OneColumnSection className="section"
                        icon = {
                            {
                                image: "/static/img/advertiser/offering.png",
                                caption: "Offerings"
                            }
                        }
                        content = {
                            {
                                header: "Just drag and drop",
                                para: "Creating a VR app is difficult. Ensuring cross-device compatibility is a nightmare. Chymera has done all the hard work so that you have to just drag and drop. Integrate Chymera ads in all major VR development platforms - Unity, Unreal Engine, Android, IOS, Windows and for all major HMDs - HTC Vive, Oculus Rift, Gear VR, Daydream and Cardboard."
                            }
                        }
                    />
                    <ScrollBasedTransition transitionClassName="fade" marginFromBottom={0.15} Component={Grid.Row}>
                        <Grid.Column>
                            <Header as='h3' className='centerText'>
                                Cross Promotion Network
                            </Header>
                        </Grid.Column>
                    </ScrollBasedTransition>
                    <ScrollBasedTransition transitionClassName="fade" marginFromBottom={0.15} Component={Grid.Row} className='section' columns={9}>
                        {getImageWithCaption('integrate-chymera.png', 'Integrate chymera ads')}
                        <Grid.Column only='tablet computer' width={1}><Image centered src="/static/img/arrow-right.png" /></Grid.Column>
                        <Grid.Column only='mobile' width={1}><Image centered src="/static/img/arrow-down.png" /></Grid.Column>
                        {getImageWithCaption('earn-credits.png', 'Earn credits')}
                        <Grid.Column only='tablet computer' width={1}><Image centered src="/static/img/arrow-right.png" /></Grid.Column>
                        <Grid.Column only='mobile' width={1}><Image centered src="/static/img/arrow-down.png" /></Grid.Column>
                        {getImageWithCaption('spend-credits.png', 'Promote app')}
                    </ScrollBasedTransition>
                    <ImageTextSection
                        image='/static/img/advertiser/image360.jpg'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"360 ads",
                                para:"360 Video and Image ads give advertisers an ability to have a one on one interaction with users. These are experience breaking ad formats but if done right, can amaze the audience. And advertisers love this format and pay a premium for it. Use this format if you have logical breaks in your experience."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/native-ads.jpg'
                        rightAligned
                        content={
                            {
                                header:"Native ads",
                                para:"Don't want the user to have a break in the experience? Use native ads. Place ad assets like billboard, TV, poster and virtual product in your scene strategically. And earn without forcing the user to an external ad."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/publisher/analytics.png'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"Analytics",
                                para:"Are ads not giving you enough income? Maybe you are not placing them at the correct place and the correct time. Analyze ad earnings, do A/B testing and get improved earnings using Chymera analytics for publishers."
                            }
                        }
                    />
                    <Divider />
                    <Grid.Row columns={16} verticalAlign='middle' className="section">
                        <SignUp headingRow={signUpHeader} />
                    </Grid.Row>
                    <Divider hidden />
                </Grid >
            </main >
        );
    }
}

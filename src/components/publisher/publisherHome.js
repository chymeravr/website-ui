var React = require('react');
var Link = require('react-router').Link
import { debug, callApiWithJwt } from '../../lib.js'
import { SignUp } from './../signUpRow'
import { Grid, Form, Button, Header, Input, Icon, Image, Message, Divider, Segment, Container, List } from 'semantic-ui-react'
import {OneColumnSection} from '../websiteComponents/OneColumnSection';
import {ImageTextSection} from '../websiteComponents/ImageTextSection';
import {ScrollingIcons} from '../websiteComponents/ScrollingIcons';

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
                                header: "Earn more and without irritating user",
                                para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers."
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
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/publisher/user-experience.png'
                        rightAligned
                        content={
                            {
                                header:"Excellent user experience",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
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
                                header: "Range of product and services",
                                para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers."
                            }
                        }
                    />
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3' className='centerText'>
                                Cross Promotion Network
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='section' columns={9}>
                        {getImageWithCaption('integrate-chymera.png', 'Integrate chymera ads')}
                        <Grid.Column only='tablet computer' width={1}><Image centered src="/static/img/arrow-right.png" /></Grid.Column>
                        <Grid.Column only='mobile' width={1}><Image centered src="/static/img/arrow-down.png" /></Grid.Column>
                        {getImageWithCaption('earn-credits.png', 'Earn credits')}
                        <Grid.Column only='tablet computer' width={1}><Image centered src="/static/img/arrow-right.png" /></Grid.Column>
                        <Grid.Column only='mobile' width={1}><Image centered src="/static/img/arrow-down.png" /></Grid.Column>
                        {getImageWithCaption('spend-credits.png', 'Promote app')}
                    </Grid.Row>
                    <ImageTextSection
                        image='/static/img/advertiser/image360.jpg'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"360 ads",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/native-ads.jpg'
                        rightAligned
                        content={
                            {
                                header:"Native ads",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
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
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
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

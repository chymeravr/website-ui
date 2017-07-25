var React = require('react');
var Link = require('react-router').Link
import { debug, callApiWithJwt } from '../../lib.js'
import { SignUp } from './../signUpRow'
import { Grid, Form, Button, Header, Input, Icon, Image, Message, Divider, Segment, Container, List } from 'semantic-ui-react'
import {OneColumnSection} from '../websiteComponents/OneColumnSection';
import {ImageTextSection} from '../websiteComponents/ImageTextSection';
import {ScrollingIcons} from '../websiteComponents/ScrollingIcons';

export class AdvertiserHomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '/login',
            loggedIn: false
        };
    }

    componentDidMount() {
        document.title = 'Advertiser | Chymera VR'
    }

    render() {
        const getImageWithCaption = (image, caption) => {
            return (
                <Grid.Column verticalAlign='bottom' width={2}>
                    <Image centered src={'/static/img/' + image} />
                    <p className="boldText caption">{caption}</p>
                </Grid.Column>
            )
        }

        const signUpHeader = (
            <Grid.Row>
                <Grid.Column width={12}>
                    <Header as='h3' className="centerText greyText">
                        Are you a VR Advertiser looking to tap into the potential of VR?
                        <br />
                        <strong>Reach us!</strong>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        );

        return (
            <main className="Site-content">
                <Grid stackable centered verticalAlign='middle' style={{margin:0}}>
                    <Grid.Row className='page-header-section advertiser-page-header image-background'>
                        <Grid.Column width={16}>
                            <Grid centered verticalAlign='middle'>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as='h1' inverted className='centerText'>Tell your brand story
                                        </Header>
                                        <Header as='h3' inverted className='centerText'>
                                            generate user interest like never before
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
                                image: "/static/img/advertiser/scale.png",
                                caption: "VR wins"
                            }
                        }
                        content = {
                            {
                                header: "VR ads outperforming mobile ads",
                                para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/high-value-audience.png'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"High value audience",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/globe.gif'
                        rightAligned
                        content={
                            {
                                header:"Global reach",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/brand-recall.png'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"Higher brand recall",
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
                        image='/static/img/advertiser/analytics.png'
                        leftAligned
                        reversed
                        content={
                            {
                                header:"Behavioral analytics",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/vr-creation.jpg'
                        rightAligned
                        content={
                            {
                                header:"Content creation service",
                                para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                                Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                                acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                            }
                        }
                    />
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header as="h3" className="centerText">Proud to work with</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <ScrollingIcons visibleElements="four" items={11} folder="/static/img/customerLogos" />
                    <Grid.Row></Grid.Row>
                    <Grid.Row columns={16} verticalAlign='middle' className="section">
                        <SignUp headingRow={signUpHeader} />
                    </Grid.Row>
                    <Divider hidden />
                </Grid>
            </main >
        );
    }
}

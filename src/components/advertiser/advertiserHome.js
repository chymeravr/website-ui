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
                                para: "Digital platform has performed really well for advertisers. Early results of advertising in VR suggest that it is even more impressive."
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
                                para:"VR is in early stage and current users of VR are of high value, explorers, and early adopters. Each dollar spent in VR advertising till now has yielded significantly higher returns. You can tap into this user base and get your brand sailing."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/geography.png'
                        rightAligned
                        content={
                            {
                                header:"Global reach",
                                para:"Even though VR is relatively a new technology, it has been able to penetrate across the globe. We have partnered with publishers in five countries who have their user base across 20 countries. If you want to engage a global audience effectively, try Chymera VR ads."
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
                                para:"VR is the only medium that gives you a user's full attention. A VR user isn't distracted by surrounding visual and audio noise. Hence, VR ads have a far greater ability to generate a higher brand recall. Our customers have recorded a mere 53% ad skip rates, a 19% CTR and a 60% user satisfaction. So, leave an everlasting impact with VR ads."
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
                                header: "A complete package for VR campaigns",
                                para: "Creating a VR ad is difficult. Making sense of its efficacy, even more difficult. But you don't have to worry as we have already taken care of your needs."
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
                                para:"360 Image and Video ads give you an ability to immerse users completely in your ad world. It is an experience breaking ad format but you have got the full attention of the viewer. If done right, it can create emotions and excitement for your brand. Paint your ad in an empty 3D canvas using 360 ads."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/native-ads.jpg'
                        rightAligned
                        content={
                            {
                                header:"Native ads",
                                para:"Do Out-Of-Home (OOH) marketing inside VR. Native ads let you place advertisements strategically in the VR content. The user continues enjoying the original experience, while your message gets delivered subtly. Chymera currently supports billboard, poster, video and product placement ad formats."
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
                                para:"VR headsets give you the data that has never been captured before - where the user is looking. Chymera has developed cutting edge technology for behavioral analysis. Get answers to the questions that have bothered you forever."
                            }
                        }
                    />
                    <ImageTextSection
                        image='/static/img/advertiser/vr-creation.jpg'
                        rightAligned
                        content={
                            {
                                header:"Ad creation service",
                                para:"VR content is difficult to make. Searching for the right VR agency is challenging. Chymera has now solved your problem by partnering with 30 VR agencies across the globe. Now you have the option to get your VR ad developed from award winning creators to industry specific agencies to affordable options."
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

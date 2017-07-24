var React = require('react');
var Link = require('react-router').Link
import { debug, callApiWithJwt } from '../../lib.js'
import { SignUp } from './../signUpRow'
import { Grid, Form, Button, Header, Input, Icon, Image, Message, Divider, Segment, Container, List } from 'semantic-ui-react'
import {OneColumnSection} from '../websiteComponents/OneColumnSection';

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
                    <Grid.Row columns={3} verticalAlign='middle' className='section'>
                        <Grid.Column only='computer' width={2} />
                        <Grid.Column only='computer' width={4}>
                            <Image centered src="/static/img/access-to-premium.png" width='200px' />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as='h1' className='boldText blue'>
                                Looking beyond mobile ads
                            </Header>
                            <p style={{ lineHeight: '35px' }}>
                                Chymera ads served have generated <b> 60% higher </b> click-through rates (<b>CTR</b>) and <b>200% higher CPMs </b> compared to 2D mobile ads.
                                <br /> <br />VR headsets capture data that hasn’t been captured before and we analyze this novel data to generate User Behavior Cohorts and
                                Engagement reports
                            </p>
                        </Grid.Column>
                        <Grid.Column width={2} />
                    </Grid.Row>
                    <Grid.Row columns={3} verticalAlign='middle' className='section greyBackground'>
                        <Grid.Column only='computer' width={2} />
                        <Grid.Column width={6}>
                            <Header as='h1' className='boldText blue'>
                                Global audience reach
                            </Header>
                            <p style={{ lineHeight: '35px' }}>
                                <ul>
                                    <li>Publishers in US, UK and France</li>
                                    <li>Ads served to users from 40+ countries</li>
                                    <li>Advertisers from 10+ countries</li>
                                </ul>
                            </p>
                        </Grid.Column>
                        <Grid.Column only='computer' width={4}>
                            <Image centered src="/static/img/global-audience.png" width='200px' />
                        </Grid.Column>
                        <Grid.Column width={2} />
                    </Grid.Row>
                    <Grid.Row columns={3} verticalAlign='middle' className='section'>
                        <Grid.Column only='computer' width={2} />
                        <Grid.Column only='computer' width={4}>
                            <Image centered src="/static/img/analytics-to-understand.png" width='300px' />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as='h1' className='boldText blue'>
                                Analytics
                            </Header>
                            <p style={{ lineHeight: '35px' }}>
                                <ul>
                                    <li>Reports to analyze how well did your ads perform</li>
                                    <li>Analytics to help you improve ad creatives</li>
                                    <li>Reports to understand how user behaved in your ad scene</li>
                                </ul>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={2} />
                    </Grid.Row>
                    <Grid.Row columns={3} verticalAlign='middle' className='section greyBackground'>
                        <Grid.Column only='computer' width={2} />
                        <Grid.Column width={6}>
                            <Header as='h1' className='boldText blue'>
                                Ad creation services
                            </Header>
                            <p style={{ lineHeight: '35px' }}>
                                Content creation in VR is non-trivial and a badly designed ad can put off users, thereby lowering your brand value.
                                Chymera pays special attention to user experience leading to much more engagement and a higher ROI.
                                <br /><br />
                                Join our network and get access to our <b> Partner VR content creators</b> who have designed award winning ads.
                            </p>
                        </Grid.Column>
                        <Grid.Column only='computer' width={4}>
                            <Image centered src="/static/img/ad-creation-services.png" width='200px' />
                        </Grid.Column>
                        <Grid.Column width={2} />
                    </Grid.Row>
                    <Grid.Row columns={2} className="greyGradientBackground section" style={{ paddingBottom: '0px' }}>
                        <Grid.Column>
                            <Grid centered stackable>
                                <Grid.Row columns={1}>
                                    <Grid.Column>
                                        <Header as='h2' className='greyText centerText'>Ad Formats</Header>
                                        <Image centered src="/static/img/lines-heading.png" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                    <Grid.Column verticalAlign='top' width={8}>
                                        <Image centered src="/static/img/360-image-video.png" />
                                        <Header as='h3' className="boldText blue"> 360 IMAGE/VIDEO ADS</Header>
                                        <p style={{ paddingLeft: '40px', paddingRight: '40px' }}>Fully immersive user experience using 360 Ad creatives</p>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='top' width={8}>
                                        <Image centered src="/static/img/2d-texture.png" />
                                        <Header as='h3' className="boldText blue">TEXTURE ADS</Header>
                                        <p style={{ paddingLeft: '40px', paddingRight: '40px' }}>Traditional 2D Ads, strategically placed within VR environment</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row only='computer' />
                                <Grid.Row>
                                    <Grid.Column>
                                        <Image size='medium' centered src="/static/img/all-platforms.png" />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={16} verticalAlign='middle' className="section">
                        <SignUp headingRow={signUpHeader} />
                    </Grid.Row>
                    <Divider hidden />
                </Grid>
            </main >
        );
    }
}

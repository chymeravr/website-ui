var React = require('react');
import { Link } from 'react-router-dom'
import { debug, callApiWithJwt, callApi } from '../lib.js'
import { SignUp } from './signUpRow'
import { Grid, Form, Button, Header, Input, Icon, Image, Message, Divider, Segment, Container, List } from 'semantic-ui-react'
import SmokeComponent from './SmokeComponent';
import {ScrollBasedTransition} from './animation/ScrollBasedTransition';
import {OneColumnSection} from './websiteComponents/OneColumnSection';
import {ImageTextSection} from './websiteComponents/ImageTextSection';
import {OnHoverColorChangeButton} from './websiteComponents/OnHoverColorChangeButton';
import {ScrollingIcons} from './websiteComponents/ScrollingIcons';
import {FallingFlakes} from './animation/FallingFlakes';
import {ImpressionCounter} from './ImpressionCounter';
import {Testimonial} from './websiteComponents/Testimonial';

export class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '/login',
        };
    }

    componentDidMount() {
        document.title = 'Chymera VR | VR Ad Network';
        callApi('/user/api/events/',
            'GET',
            null,
            (response) => this.setState(Object.assign({}, this.state, { eventName: response.event_name, description: response.description })),
            (error) => {
                console.info(error);
            },
            200);
    }

    render() {
        debug('home', this.state);
        const getClientLink = (header, content, link, className) => {
            return (
                <Grid.Column width={5} className={className}>
                    <div >
                        <Header as='h2' style={{ fontWeight: 'bold', color: '#008fcb', }}>{header}</Header>
                        <p>{content}</p>
                        <Button secondary content='Read More' as={Link} to={link} />
                    </div>
                </Grid.Column>
            )
        }
        const getImageWithCaption = (image, caption, transitionDelay) => {
            return (
                <ScrollBasedTransition transitionClassName="fade" marginFromBottom={0.15} marginFromTop={0.05} Component={Grid.Column} transitionDelay={transitionDelay} verticalAlign='bottom' width={3}>
                    <Image centered src={'/static/img/' + image} />
                    <p className="boldText caption">{caption}</p>
                </ScrollBasedTransition>
            )
        }
        const signUpHeader = (
            <Grid.Row>
                <Grid.Column width={12}>
                    <Header as='h3' className="centerText">
                        Sign up now as an advertiser/publisher
                    </Header>
                </Grid.Column>
            </Grid.Row>
        );
        return (
            <Grid stackable centered verticalAlign='middle' style={{margin:0}}>
                {/*<Grid.Row only="tablet computer" style={{padding: 0}}>
                    <FallingFlakes />
                </Grid.Row>
                */}
                <Grid.Row verticalAlign='middle' className='page-header-section blueBackground'>
                    {/* <SmokeComponent /> */}
                    <Grid.Column width={16}>
                        <Grid centered verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header as='h1' inverted className='centerText'>Advertising Platform for VR
                                    </Header>
                                    <Header as='h3' inverted className='centerText'>
                                        ... ads are <strong>NOW</strong> cool
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row only="tablet computer"></Grid.Row>
                            <Grid.Row>
                                <SignUp />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ backgroundColor: '#0d95ce', }} columns={1}>
                    <Grid.Column width={16}>
                        {this.state.eventName ? <p className='centerText whiteText'>Meet us at <strong>{this.state.eventName} </strong>{this.state.description}</p> : ''}
                    </Grid.Column>
                </Grid.Row>


                <OneColumnSection className="section"
                    icon = {
                        {
                            image: "/static/img/info.png",
                            caption: "What we do"
                        }
                    }
                    content = {
                        {
                            header: "The future of advertising is here",
                            para: "Chymera VR is a pioneer in the field Virtual Reality (VR) advertising. We provide a host of solutions that help VR publishers monetize their content and advertisers access this brand new medium of story telling. You can easily create advertisements, manage them and integrate them with your content."
                        }
                    }
                    link = {
                        {
                            text: "Contact Us",
                            destination: '/contact/'
                        }
                    }
                />
                <Grid.Row></Grid.Row>
                <OneColumnSection className="section"
                    icon = {
                        {
                            image: "/static/img/advancement.png",
                            caption: "What's new'"
                        }
                    }
                    content = {
                        {
                            header: "VR brings new branding possibilities",
                            para: "VR is an immersive medium, in which you have got the full attention of the user with no external distractions. This has profound implications for advertising opportunities."
                        }
                    }
                />

                <ImageTextSection
                    image='/static/img/emotions-vr.jpg'
                    leftAligned
                    reversed
                    content={
                        {
                            header:"Emotions in VR",
                            para:"VR is a powerful storytelling platform. Research suggests that VR content evokes emotions of a higher intensity vis-a-vis traditional 2D platforms. A study established that VR ads had a 193% higher brand recall as compared to mobile ads. Leave a long lasting impact on your users through VR."
                        }
                    }
                    link = {
                        {
                            text: "Youtube compilations",
                            destination: 'https://www.youtube.com/results?search_query=VR+first+time+reactions',
                            target: "_blank"
                        }
                    }
                />
                <ImageTextSection
                    image='/static/img/immersion.png'
                    rightAligned
                    content={
                        {
                            header:"Better engagement",
                            para:"As VR medium is free of distractions, it engages users a lot. Our customers have been able to achieve a click through rate of 19%. Time spent by users watching VR ads is also 130% higher when compared to mobile ads."
                        }
                    }
                    link = {
                        {
                            text: "Case study",
                            destination: '/customers#clickThroughRates'
                        }
                    }
                />
                <ImageTextSection
                    image='/static/img/irritatedUser.png'
                    leftAligned
                    reversed
                    content={
                        {
                            header:"Less unhappy users",
                            para:"Users have traditionally reacted to ads with displeasure. But not anymore with VR. In a survey, 60% of users said that VR ads didn't irritate them. Chymera ads have only 53% of skip rates as compared to 80% skip rates in mobile and web. So, now you can earn through ads while keeping your users happy."
                        }
                    }
                    link = {
                        {
                            text: "Case study",
                            destination: '/customers#survey'
                        }
                    }
                />
                <Grid.Row className="section">
                    <div className="image-background two first" style={{backgroundImage: "url('/static/img/advertiser-home.jpg')"}}>
                        <div className="dark-mask">
                            <OnHoverColorChangeButton as={Link} to='/advertiser/' color="orange" className="absolute-middle" >
                                Advertiser
                            </OnHoverColorChangeButton>
                        </div>
                    </div>
                    <div className="image-background two first" style={{backgroundImage: "url('/static/img/publisher-home.jpg')"}}>
                        <div className="dark-mask">
                            <OnHoverColorChangeButton as={Link} to='/publisher/' color="orange" className="absolute-middle" >
                                Publisher
                            </OnHoverColorChangeButton>
                        </div>
                    </div>
                </Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <OneColumnSection className="section"
                    icon = {
                        {
                            image: "/static/img/community.png",
                            caption: "Community"
                        }
                    }
                    content = {
                        {
                            header: "A thriving VR community",
                            para: "Within one year of operation, Chymera has been fortunate to work with global advertisers and publishers. The symbiotic relationship with VR community has helped us a lot in ideation and experimentation. We are working closely with advertisers, IAB and publishers on standardization of VR ad formats."
                        }
                    }
                />
                <ScrollBasedTransition transitionClassName="fade" marginFromBottom="0.15" Component={Grid.Row}>
                    <Grid.Column width={4}>
                        <p className="centerText" >
                            <ImpressionCounter className="massiveText" /> Impressions served
                        </p>
                    </Grid.Column>
                </ScrollBasedTransition>
                <Grid.Row></Grid.Row>
                <ImageTextSection
                    image='/static/img/geography.png'
                    leftAligned
                    reversed
                    content={
                        {
                            header:"Global presence",
                            para:"The publisher and advertiser base of Chymera spreads across 5 countries. Our ads are gathering eye-balls across 20 countries in six continents."
                        }
                    }
                />
                <ImageTextSection
                    image='/static/img/case-study.png'
                    rightAligned
                    content={
                        {
                            header:"Case Studies",
                            para:"VR ads have given our clients unprecedented results. Audi has been able to achieve a 53% of skip rate as compared to historical 80%. Rovio could achieve a CTR of 19%."
                        }
                    }
                    link = {
                        {
                            text: "More customer stories",
                            destination: '/customers#caseStudy'
                        }
                    }
                />
                <ImageTextSection
                    image='/static/img/testimonial.png'
                    leftAligned
                    reversed
                    content={
                        {
                            header:"Testimonial",
                            para:"We work with our customers closely.  Their critical feedback has helped us a lot in shaping our strategy and product. See what our customers say about us."
                        }
                    }
                    link = {
                        {
                            text: "More testimonials",
                            destination: '/customers#testimonials'
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
            </Grid >
        );
    }
}

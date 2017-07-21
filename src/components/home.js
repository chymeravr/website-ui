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
                <Grid.Row only="tablet computer" style={{padding: 0}}>
                    <FallingFlakes />
                </Grid.Row>
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
                        {/* {this.state.eventName ? <p className='centerText whiteText'>Meet us at <strong>{this.state.eventName} </strong>{this.state.description}</p> : ''} */}
                        <p className='centerText whiteText'>Meet us at <strong>blah </strong>blah blah</p>
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
                            header: "Everything for VR ads here",
                            para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers. You can easily create advertisements, manage them, integrate them with your content."
                        }
                    }
                    link = {
                        {
                            text: "Contact Us",
                            destination: '/advertiser/'
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
                            para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers. You can easily create advertisements, manage them, integrate them with your content."
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
                            para:"Virtual Reality is a powerful storytelling platform. Research suggests\
                            that VR content evokes emotions of a higher intensity vis-a-vis traditional\
                            2D platforms."
                        }
                    }
                    link = {
                        {
                            text: "Link Here",
                            destination: '/advertiser/'
                        }
                    }
                />
                <ImageTextSection
                    image='/static/img/immersion.png'
                    rightAligned
                    content={
                        {
                            header:"Better engagement",
                            para:"Virtual Reality is a powerful storytelling platform. Research suggests\
                            that VR content evokes emotions of a higher intensity vis-a-vis traditional\
                            2D platforms."
                        }
                    }
                    link = {
                        {
                            text: "Link Here",
                            destination: '/advertiser/'
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
                            para:"Virtual Reality is a powerful storytelling platform. Research suggests\
                            that VR content evokes emotions of a higher intensity vis-a-vis traditional\
                            2D platforms."
                        }
                    }
                    link = {
                        {
                            text: "Link Here",
                            destination: '/advertiser/'
                        }
                    }
                />
                <Grid.Row className="section">
                    <div className="image-background two first" style={{backgroundImage: "url('/static/img/advertiser-home.jpg')"}}>
                        <div className="dark-mask">
                            <OnHoverColorChangeButton color="orange" className="absolute-middle" >
                                Advertiser
                            </OnHoverColorChangeButton>
                        </div>
                    </div>
                    <div className="image-background two first" style={{backgroundImage: "url('/static/img/publisher-home.jpg')"}}>
                        <div className="dark-mask">
                            <OnHoverColorChangeButton color="orange" className="absolute-middle" >
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
                            header: "Trusted by world leaders",
                            para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers. You can easily create advertisements, manage them, integrate them with your content."
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
                            para:"Virtual Reality is a powerful storytelling platform. Research suggests\
                            that VR content evokes emotions of a higher intensity vis-a-vis traditional\
                            2D platforms."
                        }
                    }
                />
                <ImageTextSection
                    image='/static/img/case-study.png'
                    rightAligned
                    content={
                        {
                            header:"Case Studies",
                            para:"Virtual Reality is a powerful storytelling platform. Research suggests\
                            that VR content evokes emotions of a higher intensity vis-a-vis traditional\
                            2D platforms."
                        }
                    }
                    link = {
                        {
                            text: "More customer stories",
                            destination: '/advertiser/'
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
                            para:"Virtual Reality is a powerful storytelling platform. Research suggests\
                            that VR content evokes emotions of a higher intensity vis-a-vis traditional\
                            2D platforms."
                        }
                    }
                    link = {
                        {
                            text: "More testimonials",
                            destination: '/advertiser/'
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

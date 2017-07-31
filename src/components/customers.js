import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import {Testimonial} from './websiteComponents/Testimonial';
import {OneColumnSection} from './websiteComponents/OneColumnSection';
import {ScrollBasedTransition} from './animation/ScrollBasedTransition';
import {ImageTextSection} from './websiteComponents/ImageTextSection';

export class Customers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const names = [
            "Tiara, Eat Street",
            "Andrew, Audi",
            "Michael, PabloVR",
            "Robert, Amaze Games",
            "Meg, EduVR"
        ];
        const testimonials = [
            "We were amazed to see the engagement we got with our ads",
            "Running VR ad campaings helped us better understand our own brand",
            "For publishers, currently the main difficulty in VR is supporting multiple devices. It's so amazing that Chymera SDK seamlessly supports all the VR devices",
            "Bliss is when your users don't click - Skip Ad. Thanks Chymera",
            "Monetization in VR is challenging. Thanks to Chymera ads, we have less revenue pressure now"
        ];
        const profileImages = [
            "/static/img/customers/testimonial-pics/tiara.jpg",
            "/static/img/customers/testimonial-pics/andrew.jpg",
            "/static/img/customers/testimonial-pics/michael.png",
            "/static/img/customers/testimonial-pics/robert.png",
            "/static/img/customers/testimonial-pics/meg.jpg"
        ];
        const getTwoColumnTestimonials = (leftNumber, rightNumber) => {
            return (
                <ScrollBasedTransition transitionClassName="fade" marginFromBottom="0.15" Component={Grid.Row} only="tablet computer" >
                    <Grid.Column tablet={7} computer={6} largeScreen={5} widescreen={4}>
                        <Testimonial align="left" size="normal" profileImage={profileImages[leftNumber]} name={names[leftNumber]}>{testimonials[leftNumber]}</Testimonial>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={6} largeScreen={5} widescreen={4}>
                        <Testimonial align="right" size="normal" profileImage={profileImages[rightNumber]} name={names[rightNumber]}>{testimonials[rightNumber]}</Testimonial>
                    </Grid.Column>
                </ScrollBasedTransition>
            );
        }
        const getTwoColumnTestimonialsMobile = (number) => {
            return(
                <ScrollBasedTransition transitionClassName="fade" marginFromBottom="0.15" Component={Grid.Row} only="mobile">
                    <Grid.Column width={10}>
                        <Testimonial align="center" size="normal" profileImage={profileImages[number]} name={names[number]} >{testimonials[number]}</Testimonial>
                    </Grid.Column>
                </ScrollBasedTransition>
            );
        }
        const getOneColumnTestimonial = (number) => {
            return(
                <ScrollBasedTransition transitionClassName="fade" marginFromBottom="0.15" Component={Grid.Row} >
                    <Grid.Column>
                        <Testimonial align="center" size="large" profileImage={profileImages[number]} name={names[number]}>{testimonials[number]}</Testimonial>
                    </Grid.Column>
                </ScrollBasedTransition>
            );
        }
        return(
            <Grid stackable centered verticalAlign='middle' style={{margin:0}}>
                <Grid.Row className='page-header-section customers-page-header image-background'>
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
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <div id="testimonials"></div>
                <OneColumnSection className="section"
                    icon = {
                        {
                            image: "/static/img/testimonial-icon.png",
                            caption: "Testimonials"
                        }
                    }
                    content = {
                        {
                            header: "Trusted by world leaders",
                            para: "Chymera VR is an advertisement platform for Virtual Reality content. We provide a host of solutions to both VR publishers and advertisers."
                        }
                    }
                />
                {getTwoColumnTestimonialsMobile(0)}
                {getTwoColumnTestimonialsMobile(1)}
                {getTwoColumnTestimonials(0, 1)}
                {getOneColumnTestimonial(2)}
                {getTwoColumnTestimonialsMobile(3)}
                {getTwoColumnTestimonialsMobile(4)}
                {getTwoColumnTestimonials(3, 4)}
                <Grid.Row></Grid.Row>
                <div id="caseStudy"></div>
                <OneColumnSection className="section"
                    icon = {
                        {
                            image: "/static/img/case-study-icon.png",
                            caption: "Case Study"
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
                    image='/static/img/customers/audi.jpg'
                    leftAligned
                    reversed
                    content={
                        {
                            header:"Skip Ads",
                            para:"Video ads in mobile and web, have been historically skipped by around 80% of users. We did our first 360 video ad campaign with Audi. \
                            Both us and our client, were surprised to see the result. Even without expending justifiable resources in ad creation, the campaign was able to \
                            acheive a 53% of skip rate. This campaign was run on high end VR devices - HTC Vive and Oculus Rift."
                        }
                    }
                />
                <Grid.Row></Grid.Row>
                <div id="clickThroughRates" ></div>
                <ImageTextSection
                    image='/static/img/customers/rovio.jpg'
                    rightAligned
                    content={
                        {
                            header:"Click through rates",
                            para:"After introducing intent feature, we did our campaign with Rovio. The campaign was of Image 360 ad with sound enabled. We were able to acheive an \
                            average CTR of 19%. Comparable ad format in mobile is interstitial ad with average CTR of 5%. This data is for mobile VR devices - Gear VR and Daydream. \
                            A similar campaign was run for cardboard as well. The CTR rates were not very high in that case, mostly because of lack of intuitive input device for the headset."
                        }
                    }
                />
                <Grid.Row></Grid.Row>
                <div id="survey" ></div>
                <ImageTextSection
                    image='/static/img/customers/amaze.jpg'
                    leftAligned
                    reversed
                    content={
                        {
                            header:"User satisfaction",
                            para:"Amaze games decided to monitize their VR games for Gear VR throgh Chymera Ads. After integrating our SDK and serving 360 image ads for a month \
                            they decided to assess the affect of ads on user happiness. They surveyed 1000 customers. 60% of users said, that ads didn't irritate them. 20% said \
                            they enjoyed the ad. 90% of the users who were shown ads of other VR apps said, ads helped solve them VR content discovery problem. 30% users expressed concern \
                            over bandwidth usage due to ads"
                        }
                    }
                />
                <Grid.Row></Grid.Row>
            </Grid>
        );
    }
}

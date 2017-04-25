import React from 'react'
import 'react-dom'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import 'fuckadblock'
import 'whatwg-fetch'
// import 'particlesjs'
import { debug, callApiWithJwt, callRawApiWithJwt } from '../lib.js'
import { config } from '../config'
import ReactGA from 'react-ga'
import '../../semantic/dist/semantic.min.css';
import { Grid, Container, Message } from 'semantic-ui-react'
import { Provider, connect } from 'react-redux'
import { loginSucceeded } from '../redux/loginActions'
import { AppContainer } from 'react-hot-loader';
import Header_C from './header_c'
import { HomeView } from './home'
import Footer from './footer'
import { ProfileView } from './profile'
import { ContactView } from './contact'
import { CareerView } from './careers'
import Login_C from './login_c'
import { TermsView } from './terms'
import { AdvertiserView } from './advertiser/advertiser'
import { CampaignDetailView } from './advertiser/campaignDetail'
import { AdgroupDetailView } from './advertiser/adgroupDetail'
import { PublisherHomeView } from './publisher/publisherHome'
import { AdvertiserHomeView } from './advertiser/advertiserHome'
import { PublisherView } from './publisher/publisher'
import { AppDetailView } from './publisher/appDetail'
import { loginStore } from '../index'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
        debug('AppProps', props)
    }

    componentWillMount() {
        document.title= "Chymera VR | VR Ad Network"
    }

    componentWillReceiveProps(props) {
        this.setState(Object.assign({}, this.state, props));
    }

    render() {
        debug('App', this.state);

        return !this.state.adblock ? (
            <div className="Site">
                <Header_C pathname={this.state.pathname} transparent={this.state.transparent} handleLogout={this.handleLogout} {...this.props} />
                {this.state.child}
                <Footer />
            </div>)
            :
            (<div className="Site">
                <Header_C currentPath={this.state.name} transparent={this.state.transparent} handleLogout={this.handleLogout} />
                <main className="Site-content ui center aligned" style={{ backgroundColor: '#008FCB' }}>
                    <Grid centered columns={16} style={{ margin: 0 }} verticalAlign='middle'>
                        <Grid.Row columns={16} verticalAlign='middle' style={{ height: '92vh' }}>
                            <Grid.Column width={10}>
                                <Message negative>
                                    <Message.Header>Disable AdBlock</Message.Header>
                                    <p>Please turn off AdBlock to navigate the site. Ad-block falsely marks our API requests as Ads</p>
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </main >
                <Footer />
            </div>)
    }
}

let sitemapFunction = (() => {
    return (
        <urlset>
            <url><loc>http://chymeravr.com</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/#/advertiser/</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/#/publisher/</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/#/careers</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/#/terms</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/#/contact</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/#/terms</loc><priority>0.5</priority></url>
        </urlset>
    )
});

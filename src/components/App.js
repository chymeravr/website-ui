import React from 'react'
import { debug } from '../lib.js'
import { Grid, Container, Message } from 'semantic-ui-react'
import Header_C from './header_c'
import Footer from './footer'
import {FallingFlakes} from './animation/FallingFlakes';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            child: props.child
        };
    }

    componentWillReceiveProps(props) {
        this.setState(Object.assign({}, this.state, props));
    }

    render() {
        return !this.state.adblock ? (
            <div className="Site">
                <FallingFlakes/>
                <Header_C pathname={this.state.pathname} transparent={this.state.transparent} handleLogout={this.handleLogout} {...this.props} />
                {this.state.child}
                <Footer />
            </div>)
            :
            (<div className="Site">
                <Header_C currentPath={this.state.name} transparent={this.state.transparent} handleLogout={this.handleLogout} {...this.props} />
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
            <url><loc>http://chymeravr.com/advertiser/</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/publisher/</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/careers</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/terms</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/contact</loc><priority>0.5</priority></url>
            <url><loc>http://chymeravr.com/terms</loc><priority>0.5</priority></url>
        </urlset>
    )
});

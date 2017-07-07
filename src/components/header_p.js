var React = require('react')
import { Link } from 'react-router-dom'
import { logout, debug } from '../lib'
import { config } from '../config'
import { Table, Segment, Image, Menu, Grid, Button, Accordion, Icon } from 'semantic-ui-react'
import { ATTEMPT_LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../redux/loginActions'

export class Header_P extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: props.pathname,
            headerVisible: false,
            transparent: props.transparent,
            loginState: props.loginState,
        }
        this.handleLogout = props.handleLogout;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pathname: nextProps.pathname,
            headerVisible: false,
            transparent: nextProps.transparent,
            loginState: nextProps.loginState
        });
    }

    render() {
        debug('header', this.state);

        if (this.state.loginState === LOGIN_SUCCEEDED) {
            var button = <Menu.Item className="navbarButton navbarItem" name='logout' onClick={() => this.handleLogout(this.props.history)} />
        } else {
            var button = <Menu.Item className="navbarButton navbarItem" name='Sign-in' onClick={() => this.props.history.push('/login/')} />
        }


        const currentPath = this.state.pathname;
        var activeItem;
        switch (this.state.pathname) {
            case 'publisher':
                activeItem = 'publishers'
                break;
            case 'advertiser':
                activeItem = 'advertisers'
                break;
            case 'careers':
                activeItem = 'careers'
                break;
            default:
                activeItem = ''
        }

        const transparent = this.state.transparent;

        const getItem = (name, link) => <Menu.Item name={name} className={activeItem === name ? 'navbarActiveItem' : 'navbarItem'} as={Link} to={link} />

        return (
            <Grid columns={16} style={{margin:0}}>
                <Grid.Row only='mobile' columns={2} className={'navbarMobile ' + (transparent ? 'transparent' : 'blueBg')}>
                    <Grid.Column width={6}>
                        <Image size='tiny' src='/static/img/logo-simple.png' style={{ padding: '15px 20px 0px 15px' }} as={Link} to={'/'} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Accordion>
                            <Accordion.Title style={{ height: '4rem' }}>
                                <Icon inverted style={{ float: 'right', padding: '5px 30px 0px 0px' }} size='big' name='content' />
                            </Accordion.Title>
                            <Accordion.Content>
                                <Menu fluid vertical pointing secondary size='massive' floated='right' color='blue' className="navbarMenuMobile">
                                    {getItem('advertisers', '/advertiser/')}
                                    {getItem('publishers', '/publisher/')}
                                    {getItem('careers', '/careers/')}
                                    {button}
                                    {this.state.loginState === LOGIN_SUCCEEDED ? <Button color="teal" content='Profile' onClick={(e, d) => this.props.history.push('/profile/')} /> : ''}
                                </Menu>
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='tablet computer' centered className={'navbar ' + (transparent ? 'transparent' : 'blueBg')}>
                    <Grid.Column tablet={16} computer={14} largeScreen={13} widescreen={12}>
                        <Table padded inverted className="transparent">
                            <Table.Body>
                                <Table.Row>
                                        <Table.Cell><Image src="/static/img/logo.png" className="logo" size="tiny" as={Link} to={'/'} /></Table.Cell>
                                    <Table.Cell textAlign='right'>
                                        <Menu pointing secondary size='massive' floated='right' color='blue' className="navbarMenu">
                                            {getItem('advertisers', '/advertiser/')}
                                            {getItem('publishers', '/publisher/')}
                                            {getItem('careers', '/careers/')}
                                            {button}
                                            {this.state.loginState === LOGIN_SUCCEEDED ? <Button color="teal" content='Profile' onClick={(e) => this.props.history.push('/profile/')} /> : ''}
                                        </Menu>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

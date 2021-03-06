var React = require('react');
var Link = require('react-router').Link
import { debug, callApiWithJwt } from '../lib.js'
import { Grid, Form, Button, Header, Input, Icon, Image, Message, Divider, Segment, Container, List } from 'semantic-ui-react'

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailExists: false,
            registered: false
        };
        this.headingRow = props.headingRow;
        this.bordered = props.bordered;
    }


    handleChange = (key) => {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(Object.assign({}, this.state, state));
        };
    }

    clearMessages = () => {
        this.setState(Object.assign({}, this.state, { emailExists: false, registered: false }));
    }

    registerUser = () => {
        callApiWithJwt(
            '/user/api/preview_register',
            'POST',
            JSON.stringify({ user_email: this.state.email }),
            (response) => {
                this.setState(Object.assign({}, this.state, { emailExists: false, registered: true }));
                setTimeout(this.clearMessages, 5000);
            },
            (error) => {
                this.setState(Object.assign({}, this.state, { emailExists: true, registered: false }))
                setTimeout(this.clearMessages, 5000);
            },
            201
        );
    }

    render() {
        debug('signUp', this.state);

        const submitButton = <Button secondary onClick={(e, d) => { this.registerUser(); e.preventDefault(); } } >Sign Up</Button >;
        const mobileSubmitButton = <Button secondary fluid onClick={(e, d) => { this.registerUser(); e.preventDefault(); } }>Sign Up</Button>;

        const emailInput =
            <Input className={this.bordered ? 'orangeInput' : ''} fluid error={this.state.emailExists && this.state.registered}
                label={submitButton} placeholder='Email Address' labelPosition='right'
                onChange={this.handleChange('email')} value={this.state.email} />

        const emailInputMobile =
            <div>
                <Input className={this.bordered ? 'orangeInput' : ''} fluid error={this.state.emailExists && this.state.registered}
                    placeholder='Email Address'
                    onChange={this.handleChange('email')} value={this.state.email} />
                <br />
                {mobileSubmitButton}
            </div>

        return (
            <Grid.Column width={16}>
                <Grid centered verticalAlign='middle'>
                    {this.headingRow}
                    <Grid.Row only='mobile'>
                        <Grid.Column width={14}>
                            <Form>
                                {this.state.emailExists ? <Message negative><p>Email invalid or already registered!</p></Message> : ''}
                                {this.state.registered ? <Message positive><p>Email registered!</p></Message> : ''}
                                {emailInputMobile}
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only='tablet computer'>
                        <Grid.Column tablet={10} computer={8} largeScreen={6} widescreen={4} >
                            <Form>
                                {this.state.emailExists ? <Message negative><p>Email invalid or already registered!</p></Message> : ''}
                                {this.state.registered ? <Message positive><p>Email registered!</p></Message> : ''}
                                {emailInput}
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        );
    }
}

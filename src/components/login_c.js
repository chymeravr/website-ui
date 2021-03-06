import { connect } from 'react-redux'
import { startLogin, loginSucceeded, loginFailed, logout } from '../redux/loginActions'
import { Login_P } from './login_p'
import { callRawApiWithJwt, callApiWithJwt, debug, callApi } from '../lib.js'
import { config } from '../config'

const mapStateToProps = (state) => {
    console.info(state)
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        tryLogin: (event, username, password, history) => {
            event.preventDefault();
            var data = new FormData();
            data.append('username', username);
            data.append('password', password);
            dispatch(startLogin());
            callRawApiWithJwt('/user/api/login',
                'POST',
                data,
                (response) => {
                    localStorage.setItem(config.jwt.tokenKey, response['token']);
                    callApiWithJwt('/user/api/view_profile',
                        'GET',
                        null,
                        (response) => {
                            dispatch(loginSucceeded(response.user.username));
                            history.push('/profile/')
                        },
                        (error) => {
                            console.error(error)
                            dispatch(loginFailed())
                        }
                    );
                },
                (error) => {
                    console.error(error);
                    dispatch(loginFailed());
                }
            );
        }
    }
}

const Login_C = connect(mapStateToProps, mapDispatchToProps)(Login_P)

export default Login_C 
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from "../Navbar/Navbar";
import { userActions } from '../../actions/userActions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="rst">
            <Navbar />
            <section className="rgt">
            <p className = "createText">Sign in:</p>
            <form className="rgt-form" onSubmit={this.handleSubmit}>
                <div className="input-rgt" >
                    <div>
                        <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} /><br />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} /><br />
                    </div>
                    {submitted && (!username ||!password) &&
                            <div style={{ backgroundColor: "white", borderRadius: "5px", padding: "3px", marginTop: "10px"}} >Please enter all fields!</div>
                    }
                    <br />
                    <button id="btn" type="submit" >
                       Sign in
                    </button>
                </div>
            </form>

            <p className="changeLink">Don't have an account?</p>
            <Link className="changeLink" to='/sign_up'>Create one!</Link>
            </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
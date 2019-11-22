import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from "../Navbar/Navbar";
import { userActions } from '../../actions/userActions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="rst">
            <Navbar />
            <section className="rgt">
            <p className = "createText">Create new account:</p>
            <form className="rgt-form"  onSubmit={this.handleSubmit}>
                <div className="input-rgt" >
                    <div>
                        <input type="text" placeholder="First name" name="firstName" value={user.firstName} onChange={this.handleChange} /><br />
                       
                    </div>
                    <div>
                        <input type="text" placeholder="Last name" name="lastName" value={user.lastName} onChange={this.handleChange} /><br />
                    </div>
                    <div>
                        <input type="text" placeholder="Username" name="username" value={user.username} onChange={this.handleChange} /><br />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" value={user.password} onChange={this.handleChange} /><br />
                    </div>
                    {submitted && (!user.firstName || !user.lastName || !user.username ||!user.password) &&
                            <div style={{ backgroundColor: "white", borderRadius: "5px", padding: "3px", marginTop: "10px"}} >Please enter all fields!</div>
                    }
                    <br />
                    <button id="btn" type="submit" >
                        Sign up
                    </button><br /><br />
                    <button id="btn">
                        <Link to="/sign_in" style={{textDecoration: "none", color: "black"}}>Cancel</Link>
                    </button>
                </div> 
            </form>
            </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
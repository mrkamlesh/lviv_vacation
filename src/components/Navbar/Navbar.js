import React, {Component} from 'react';
import favicon from '../../img/around.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{
    render() {
        return (
            <header className="header">
                <ul className="navbar">
                    <li className="navbarLi">
                        <NavLink to='/'>
                            <img className="logo" src={favicon} alt="logo" />
                        </NavLink></li>
                    <div className="nav-cng">
                        <li className="navbarLi">
                            <NavLink activeClassName="act" to='/about'>
                                About 
                            </NavLink>         
                        </li>

                        {this.props.loggedIn && <li className="navbarLi">
                            <NavLink activeClassName="act" to='/users_page'>
                                Basket
                            </NavLink>
                        </li>}

                        {this.props.loggedIn &&<li className="navbarLi">
                            <NavLink activeClassName="act" to='/sign_in'>
                                Log out
                            </NavLink>
                        </li>}

                        {!this.props.loggedIn &&<li className="navbarLi">
                            <NavLink activeClassName="act" to='/sign_in'>
                                Sign In
                            </NavLink>
                        </li>}

                        {!this.props.loggedIn &&<li className="navbarLi">
                            <NavLink activeClassName="act" to='/sign_up'>
                                Sign Up
                            </NavLink>
                        </li>}
                    </div>
                </ul>
            </header>
        )
    }
}

const mapStateToProps = (state) => {  
    return {
        loggedIn : state.authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Navbar);
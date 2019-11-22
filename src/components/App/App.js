import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
import  '../../css/style.css';
import '../../css/normalize.css';
import { connect } from 'react-redux';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';
import { history } from '../../helpers/history';
import { alertActions } from '../../actions/alertActions';
import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterPage } from '../RegisterPage/RegisterPage';
import userCatalog from '../userChoice/userCatalog';

class App extends Component{

    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }


    render() {
        return (
                <div className="hide-scroll">
                    <Router history={history}>
                        <div>
                            <Route exact path="/" component={MainBlock} />
                            <Route exact path="/about" component={AboutBlock} />
                            <Route exact path='/sign_in' component={LoginPage} />
                            <Route exact path='/sign_up' component={RegisterPage}/>
                            <Route exact path='/hotels' component={CatalogWithFilter}/>
                            <Route exact path='/users_page' component={userCatalog}/>
                        </div>
                    </Router>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.data.items,
    loading: state.data.loading,
    error: state.data.error,
    userItems: state.data.userItems
});


// function mapStateToProps(state) {
//     const { alert } = state;
//     return {
//         alert
//     };
// }

export default connect(mapStateToProps)(App);
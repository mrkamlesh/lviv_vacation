import { combineReducers } from "redux";
import data from "./dataReducer";
import filter from './filterMenuReducer';
import click from './clickReducer'
import { reducer as formReducer } from 'redux-form'

import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import budget from './budgetReducer';

export default combineReducers({
  form : formReducer,
  data,
  filter,
  click,
  authentication,
  registration,
  users,
  alert,
  budget
});
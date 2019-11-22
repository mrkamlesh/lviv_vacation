import React, {Component} from 'react';
import renderField from "../../components/Validation/renderField";
import validate from "../../components/Validation/validation";
import { Field, reduxForm } from 'redux-form'; 
import { connect } from 'react-redux';
import { changeBudget } from '../../actions/actionsData';

class MainContent extends Component {
    render() {
    const { handleSubmit, submitting } = this.props;
    const submit = (values) => {this.props.dispatch(changeBudget(values.budget));}
    return (
        <div className="choice_text">
        <span className="textBudget"> 
            Enter your budget for one day:
        </span> 
        <div className="bdg-ipt">
            <form className="budget_form" onSubmit={handleSubmit(submit)}>  
                    <Field 
                    className="input_budget"
                    name="budget" 
                    type="text" 
                    placeholder="100$"
                    component={renderField} />
                <button className="btn" type="submit" disabled={submitting} >
                    Submit
                </button>
            </form>
        </div>
        <br />
        <span className="textAct"> 
            Choose your activity:
        </span>
    </div>
    )
    }
}

function mapStateToProps(state) {
    return {
        budget: state.data.budget
    };
} 

MainContent = reduxForm({
    form: 'mainContent', 
    validate
})(MainContent)

export default connect(mapStateToProps)(MainContent);
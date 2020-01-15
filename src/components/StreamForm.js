import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import { createStream } from '../actions';

class StreamForm extends Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error':''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input type="text" {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        // formValues coming in via form, not explicit in handleSubmit
        // this.props.createStream(formValues);

        // refactor from streamCreate
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            // handleSubmit prop from redux-form
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )

    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'Please enter a title';
    }

    if(!formValues.description) {
        errors.description = 'Please enter a description';
    }

    return errors;
};

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);

export default reduxForm({
        form: 'streamForm',
        validate
    })(StreamForm);
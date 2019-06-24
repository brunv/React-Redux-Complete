import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Remember: Field is capitalized because it is a React Component
// and reduxForm is not because it is a function!

class StreamCreate extends React.Component {
    renderInput({ input, label, meta }) {
        console.log(meta);
        // console.log(formProps);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formValues) {
        // event.preventDefault(); is already handled by the 'handleSubmit' method of Redux Form
        console.log(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);
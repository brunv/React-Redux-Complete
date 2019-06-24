import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Remember: Field is capitalized because it is a React Component
// and reduxForm is not because it is a function!

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        // console.log(formProps);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    render() {
        // console.log(this.props);
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
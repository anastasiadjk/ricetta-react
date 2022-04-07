import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';
//down new code
import TextBox from './textBox';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }
    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, { abortEarly: false });
        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    //input distract into name, value
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton(label) {
        return <button
            disabled={this.validate()}
            className="btn btn-primary m-2">{label}</button>
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        return (
            <Input
                type={type}
                name={name}
                label={label}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    //new code down
    renderTextbox(name, label) {
        const { data, errors } = this.state;

        return (
            <TextBox
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                errors={errors[name]}
            />
        )
    }


}

export default Form;
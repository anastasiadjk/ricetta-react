import React from 'react';


const Input = ({ name, label, type, value, error, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                onChange={onChange}
                value={value}
                id={name}
                type={type}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;
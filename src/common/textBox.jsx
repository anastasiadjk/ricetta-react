import React from 'react';


const TextBox = ({ name, label, type, value, error, onChange }) => {
    return (
        <div className="form-group">

            <label htmlFor={name}>{label}</label>
            <textarea
                rows="6"
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

export default TextBox;
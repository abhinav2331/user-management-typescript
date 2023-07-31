import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Inputtext = (props:any) => {
    const {label, type, name, register, errors} = props;
    const key = name?.lastIndexOf('.') > 0 ? name.substring(name.lastIndexOf('.') + 1) : name;
    console.log(errors);
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label={label}
                className="mb-3"
            >
                <Form.Control 
                    type={type} 
                    placeholder={label} 
                    name={name} 
                    {...register(name)}
                />
                { errors?.[key]?.message  &&
                    <span id="component-helper-text">
                    { errors?.[key]?.message  }
                    </span>
                }
            </FloatingLabel>
        </>
    );
}

export default Inputtext;

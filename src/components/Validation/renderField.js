import React from 'react';

const renderField = ({
    input,
    placeholder,
    type,
    className,
    meta: { touched, error }
}) => 
    <div>
      <div>
        <input {...input} className={className} placeholder={placeholder} type={type} />
        {touched &&
          (error &&  
            <div>
                <span className="error_bdg">
                {error}
                </span>
                <br /> 
            </div>) }
      </div>
    </div>

export default renderField;
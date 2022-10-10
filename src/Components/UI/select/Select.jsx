import React from 'react';

export const Select = ({defaultValue, options, value, onChange}) => {

    return (
        <select value={value}
                onChange={(e) => onChange(e.currentTarget.value)}>
            <option disabled value=''>{defaultValue}</option>

            {options.map((option, i) => (<option key={i} value={option.value}>
                {option.name}
            </option>))}

        </select>
    )
}
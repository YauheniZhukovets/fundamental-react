import React from 'react';
import s from './Input.module.css'


export const Input = React.forwardRef((props, ref) => {

    return (
        <input {...props} ref={ref} className={s.ownInput}/>
    )
})
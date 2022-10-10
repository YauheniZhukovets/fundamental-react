import React from 'react';
import s from './Modal.module.css'

export const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [s.modal]

    if (visible) {
        rootClasses.push(s.active)
    }

    return (
        <div onClick={() => setVisible(false)}
             className={rootClasses.join(' ')}>
            <div onClick={(e) => e.stopPropagation()}
                 className={s.modalContent}>
                {children}
            </div>
        </div>
    );
}
import React from 'react';
import styles from './Button.module.css';

const Button = ({variant = 'primary', children, classNames, ...props}) => {
    const buttonStylesClassName = function () {
        switch (variant) {
            case 'primary' : {
                return 'btn-primary'
            }
            case 'secondary' : {
                return 'btn-secondary'
            }
            default : {
                return 'btn-primary'
            }
        }
    }
    return (
        <button className={`${styles[buttonStylesClassName()]} ${classNames}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
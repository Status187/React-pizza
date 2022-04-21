import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

const Button = ({onClick, className, outLine, children, text}) => {
    return (
        <button className={classNames('button', className,
                {
                    'button--outline' : outLine,
                },
                {
                    'button--test' : text,
                },
            )} onClick={onClick}>{ text || children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
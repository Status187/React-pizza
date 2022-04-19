import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

const Button = ({onClick, className, outLine, children, text}) => {
    console.log({onClick})
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

// class Button extends React.Component {
//
//     render() {
//         console.log(this.props)
//         return <button
//             className={classNames('button',
//                 {
//                     'button--outline' : this.props.outline
//                 },
//                 {
//                     'button--test' : this.props.test,
//                 },
//             )}>{this.props.children || this.props.text}</button>
//     }
// }

Button.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
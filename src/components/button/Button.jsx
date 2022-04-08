import React from "react";
import classNames from "classnames";

const Button = ({onClick, className, outLine, children, text}) => {
    // console.log(props)
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
export default Button;
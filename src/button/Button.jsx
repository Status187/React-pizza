import React from "react";
import classNames from "classnames";

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

const Button = (props) => {
    return (
        // console.log(props);
        <button className={classNames('button',
                {
                    'button--outline' : props.outline
                },
                {
                    'button--test' : props.test,
                },
            )}>{props.text || props.test || props.children}</button>
    )
}

export default Button;
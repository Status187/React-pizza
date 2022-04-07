import React from "react";

class Button extends React.Component {

    render() {
        console.log(this.props)
        return <button>{this.props.text || 'STATUS'}</button>
    }
}

export default Button;
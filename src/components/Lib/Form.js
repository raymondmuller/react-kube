const React = require("react");

class Form extends React.Component {

    render() {
        return (
            <form method={this.props.method} action={this.props.action} className="forms">
              {this.props.children}
            </form>
        )
    }
}

Form.defaultProps = {method: "post", action: ""}

module.exports = Form;




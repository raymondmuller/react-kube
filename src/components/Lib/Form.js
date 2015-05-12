const React = require("react");
const classNames = require("classnames");

class Form extends React.Component {
  render() {
    return (
      <form method={this.props.method} action={this.props.action} className={classNames(this.props.className, "forms")}>
        {this.props.children}
      </form>
    );
  }
}

Form.defaultProps = {method: "post", action: ""};

module.exports = Form;

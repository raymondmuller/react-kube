const React = require("react");
const classNames = require("classnames");

class Form extends React.Component {
  render() {
    return (
      <form action={this.props.action} className={classNames(this.props.className, "forms")} method={this.props.method} style={this.props.style}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
	action: React.PropTypes.string,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	method: React.PropTypes.string,
	style: React.PropTypes.object
};

Form.defaultProps = {method: "post", action: ""};

module.exports = Form;

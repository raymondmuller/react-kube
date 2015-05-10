const React = require("react");
var classNames = require("classnames");

class Block extends React.Component {
	render() {
		return (
			<li>{this.props.children}</li>
		)
	}
}

module.exports = Block;
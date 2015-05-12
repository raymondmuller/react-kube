const React = require("react");

class Block extends React.Component {
	render() {
		return (
			<li className={this.props.className} style={this.props.style}>
				{this.props.children}
			</li>
			);
	}
}

Block.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = Block;

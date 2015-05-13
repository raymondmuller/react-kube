const React = require("react");
const classNames = require("classnames");

class Blocks extends React.Component {

	render() {
		let styles = "blocks-" + this.props.amount;
		styles += this.props.mobile ? " blocks-mobile-" + this.props.mobile : "";
		return (
			<ul className={classNames(this.props.className, styles)} style={this.props.style}>
				{this.props.children}
			</ul>
		);
	}
}

Blocks.propTypes = {
	amount: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]).isRequired, // amount is required
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	mobile: React.PropTypes.number,
	style: React.PropTypes.object
};

module.exports = Blocks;

const React = require("react");
const classNames = require("classnames");

class Tooltip extends React.Component {
	render() {
		let tooltipClasses = classNames({
			"tooltip": true,
			"tooltip-theme-black": this.props.color === "black",
			"tooltip-theme-blue": this.props.color === "blue",
			"tooltip-theme-green": this.props.color === "green",
			"tooltip-theme-red": this.props.color === "red",
			"tooltip-theme-white": this.props.color === "white",
			"tooltip-theme-yellow": this.props.color === "yellow"
		});

		return (
			<div className={classNames(this.props.className, tooltipClasses)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
}

Tooltip.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = Tooltip;

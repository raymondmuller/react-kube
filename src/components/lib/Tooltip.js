import React from "react";
import classNames from "classnames";

class Tooltip extends React.Component {

	constructor(props) {
		super(props);
		this.state = {show: false};
	}

	handleMouseEnter(e) {
		let posTop;
		let posLeft;

		let tooltipWidth = React.findDOMNode(this.refs.tooltip).offsetWidth;
		let tooltipHeight = React.findDOMNode(this.refs.tooltip).offsetHeight;

		switch(this.props.placement) {
			case "left":
				posTop = e.target.offsetTop;
				posLeft = e.target.offsetLeft - tooltipWidth;
				break;
			case "right":
				posTop = e.target.offsetTop;
				posLeft = e.target.offsetLeft + e.target.offsetWidth;
				break;
			case "top":
				posTop = e.target.offsetTop - tooltipHeight;
				posLeft = e.target.offsetLeft;
				break;
			case "bottom":
				posTop = e.target.offsetTop + e.target.offsetHeight;
				posLeft = e.target.offsetLeft;
				break;
			default:
				break;
		}

		this.setState({
			show: true,
			top: posTop,
			left: posLeft
		});
	}

	handleMouseLeave() {
		this.setState({
			show: false
		});
	}

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

		let tooltipStyle = {
			whiteSpace: "no-wrap",
			left: this.state.left,
			top: this.state.top,
			visibility: this.state.show ? "visible" : "hidden"
		};

		return (
			<span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
				{this.props.children}
				<div className={classNames(this.props.className, tooltipClasses)} ref="tooltip" style={tooltipStyle}>
					{this.props.text}
				</div>
			</span>
		);
	}
}

Tooltip.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	color: React.PropTypes.oneOf(["blue", "red", "yellow", "green", "white"]),
	placement: React.PropTypes.oneOf(["top", "right", "bottom", "left"]),
	style: React.PropTypes.object,
	text: React.PropTypes.string.isRequired
};

Tooltip.defaultProps = { placement: "bottom"};

module.exports = Tooltip;

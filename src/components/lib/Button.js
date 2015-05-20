import React from "react";
import classNames from "classnames";

class Button extends React.Component {

	render() {
		let styles = classNames({
			"btn": true,
			"left": this.props.left,
			"right": this.props.right,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		});

		styles += this.props.color ? " btn-" + this.props.color : "";
		styles += this.props.width ? " width-" + this.props.width : "";

		let iconStyles = this.props.icon ? "fa fa-" + this.props.icon : "";

		return (
			<button className={classNames(this.props.className, styles)} onClick={this.props.onClick} type={this.props.type} value={this.props.value}>
				{this.props.icon ? <li className={iconStyles}></li> : null }
				{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.oneOf(["black", "blue", "red", "yellow", "green", "white"]),
	disabled: React.PropTypes.bool,
	icon: React.PropTypes.string,
	left: React.PropTypes.bool,
	onClick: React.PropTypes.func,
	outline: React.PropTypes.bool,
	right: React.PropTypes.bool,
	type: React.PropTypes.string,
	value: React.PropTypes.string,
	width: React.PropTypes.bool
};

module.exports = Button;

import React from "react";
import classNames from "classnames";

class Button extends React.Component {

	render() {
		let styles = classNames({
			"bold": this.props.bold,
			"btn": true,
			"btn-active": this.props.active,
			"btn-big": this.props.big,
			"btn-disabled": this.props.disabled,
			"btn-outline": this.props.outline,
			"btn-round": this.props.round,
			"btn-small": this.props.small,
			"btn-smaller": this.props.smaller,
			"left": this.props.left,
			"right": this.props.right
		});

		styles += this.props.color ? " btn-" + this.props.color : "";
		styles += this.props.width ? " width-" + this.props.width : "";

		let iconStyles = this.props.icon ? "fa fa-" + this.props.icon : "";

		let button =
			<button className={classNames(this.props.className, styles)} onClick={this.props.onClick} style={this.props.style} type={this.props.type} value={this.props.value}>
				{this.props.icon ? <li className={iconStyles}></li> : null }
				{this.props.children}
			</button>;

		return (
			<div>
			{this.props.append ?
				<span className="btn-append"> {button} </span>
				: {button} }
			</div>
		);
	}
}

Button.propTypes = {
	active: React.PropTypes.bool,
	append: React.PropTypes.bool,
	big: React.PropTypes.bool,
	bold: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.oneOf(["black", "blue", "red", "yellow", "green", "white"]),
	disabled: React.PropTypes.bool,
	icon: React.PropTypes.string,
	left: React.PropTypes.bool,
	onClick: React.PropTypes.func,
	outline: React.PropTypes.bool,
	right: React.PropTypes.bool,
	round: React.PropTypes.bool,
	small: React.PropTypes.bool,
	smaller: React.PropTypes.bool,
	style: React.PropTypes.object,
	type: React.PropTypes.string,
	value: React.PropTypes.string,
	width: React.PropTypes.bool
};

module.exports = Button;

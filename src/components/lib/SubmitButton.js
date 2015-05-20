import React from "react";
import classNames from "classnames";

class SubmitButton extends React.Component {
	render() {
		let styles = classNames({
			"btn": true,
			"btn-active": this.props.active,
			"btn-big": this.props.big,
			"btn-disabled": this.props.disabled,
			"btn-outline": this.props.outline,
			"btn-small": this.props.small,
			"btn-smaller": this.props.smaller,
			"left": this.props.left,
			"right": this.props.right
		});

		styles += this.props.color ? " btn-" + this.props.color : "";
		styles += this.props.width ? " width-" + this.props.width : "";

		return (
			<input className={classNames(this.props.className, styles)} type="submit" value={this.props.children}/>
		);
	}
}

SubmitButton.propTypes = {
	active: React.PropTypes.bool,
	big: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	icon: React.PropTypes.string,
	left: React.PropTypes.bool,
	onClick: React.PropTypes.func,
	outline: React.PropTypes.bool,
	right: React.PropTypes.bool,
	small: React.PropTypes.bool,
	smaller: React.PropTypes.bool,
	width: React.PropTypes.bool
};

module.exports = SubmitButton;

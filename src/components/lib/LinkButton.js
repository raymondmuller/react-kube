import React from "react";
import classNames from "classnames";

class LinkButton extends React.Component {
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

		return (
			<a className={classNames(this.props.className, styles)} href={this.props.url} style={this.props.style} target={this.props.target ? this.props.target : "_self"} >
				{this.props.children}
			</a>
		);
	}
}

LinkButton.propTypes = {
	active: React.PropTypes.bool,
	big: React.PropTypes.bool,
	bold: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
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
	target: React.PropTypes.string,
	url: React.PropTypes.string,
	width: React.PropTypes.bool
};

module.exports = LinkButton;

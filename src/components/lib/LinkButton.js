import React from "react";
import classNames from "classnames";

class LinkButton extends React.Component {
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

		return (
			<a className={classNames(this.props.className, styles)} href={this.props.url} target={this.props.target ? this.props.target : "_self"} >
				{this.props.children}
			</a>
		);
	}
}

LinkButton.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	icon: React.PropTypes.string,
	left: React.PropTypes.bool,
	onClick: React.PropTypes.func,
	outline: React.PropTypes.bool,
	right: React.PropTypes.bool,
	target: React.PropTypes.string,
	url: React.PropTypes.string,
	width: React.PropTypes.bool
};

module.exports = LinkButton;

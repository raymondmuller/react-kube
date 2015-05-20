import React from "react";
import classNames from "classnames";

class Badge extends React.Component {

	render() {
		let styles = classNames({
			"badge": true,
			"badge-small": this.props.small
		});

		styles += this.props.color ? " badge-" + this.props.color : "";
		return (
			<span className={classNames(this.props.className, styles)} style={this.props.style}>
				{this.props.children}
			</span>
		);
	}

}

Badge.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	color: React.PropTypes.oneOf(["black", "blue", "red", "yellow", "green", "white"]),
	small: React.PropTypes.bool,
	style: React.PropTypes.object
};

Badge.defaultProps = { small: false };

module.exports = Badge;

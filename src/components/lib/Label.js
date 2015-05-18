import React from "react";
import classNames from "classnames";

class Label extends React.Component {
	render() {
		let styles = classNames({
			"label": true,
			"label-outline": this.props.outline
		});

		styles += this.props.color ? " label-" + this.props.color : "";

		return (
			<span className={classNames(this.props.className, styles)} style={this.props.style}>
				{this.props.children}
			</span>
		);
	}
}

Label.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	outline: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = Label;

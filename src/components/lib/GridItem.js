import React from "react";
import classNames from "classnames";

class GridItem extends React.Component {

	render() {
		let styles = classNames({
			"unit-centered": this.props.centered,
			"unit-push-right": this.props.right
		});

		styles += this.props.size ? " unit-" + this.props.size : "";
		styles += this.props.push ? " unit-push-" + this.props.push : "";

		return (
			<div className={classNames(this.props.className, styles)} id={this.props.id} style={this.props.style}> {this.props.children} </div>
		);
	}
}

GridItem.propTypes = {
	centered: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	push: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]),
	right: React.PropTypes.bool,
	size: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]).isRequired,
	style: React.PropTypes.object
};

module.exports = GridItem;

import React from "react";

class BreadCrumb extends React.Component {

	render() {
		return (
				<li active={this.props.active} className={this.props.className} style={this.props.style}>{this.props.children}</li>
		);
	}
}

BreadCrumb.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = BreadCrumb;

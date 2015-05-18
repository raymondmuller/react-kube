import React from "react";

class Breadcrumb extends React.Component {

	render() {
		return (
				<li active={this.props.active} className={this.props.className} style={this.props.style}>{this.props.children}</li>
		);
	}
}

Breadcrumb.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = Breadcrumb;

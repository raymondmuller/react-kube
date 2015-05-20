import React from "react";

class Breadcrumb extends React.Component {

	render() {
		return (
				<li className={this.props.className} style={this.props.style}>
				{this.props.active ?
					<span>{this.props.children}</span>
					: <a href={this.props.url} target="_self">{this.props.children}</a>} }
				</li>
		);
	}
}

Breadcrumb.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	style: React.PropTypes.object,
	target: React.PropTypes.string,
	url: React.PropTypes.string
};

Breadcrumb.defaultProps = { target: "_self" };

module.exports = Breadcrumb;

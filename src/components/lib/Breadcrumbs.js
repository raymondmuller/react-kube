import React from "react";
import classNames from "classnames";

class Breadcrumbs extends React.Component {

	render() {
		let styles = classNames({
			"breadcrumbs": true,
			"breadcrumbs-path": this.props.path
		});

		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {key: i, index: i});
		}, this);

		return (
			<nav className={classNames(this.props.className, styles)} style={this.props.style}>
				<ul>
				{children}
				</ul>
			</nav>
		);
	}
}

Breadcrumbs.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	path: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = Breadcrumbs;

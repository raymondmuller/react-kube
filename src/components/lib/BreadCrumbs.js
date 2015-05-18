import React from "react";
import classNames from "classnames";

class BreadCrumbs extends React.Component {

	render() {
		let styles = classNames({
			"breadcrumbs": true,
			"breadcrumbs-path": this.props.path
		});
		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: this.props.active, index: i});
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

BreadCrumbs.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	path: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = BreadCrumbs;

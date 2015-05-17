const React = require("react");
var classNames = require("classnames");

class NavigationToggle extends React.Component {

	render() {
		let styles = {
			"navigation-toggle": true
		};

		return (
		<div className={classNames(this.props.className, styles)} style={this.props.style}>
			{this.props.children}
		</div>
		);
	}
}

NavigationToggle.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = NavigationToggle;

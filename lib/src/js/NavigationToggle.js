const React = require("react");
var classNames = require("classnames");

class NavigationToggle extends React.Component {

	render() {
		let styles = {
			"navigation-toggle": true
		};

		return (
		<div className={classNames(this.props.className, styles)} data-target={this.props.target} data-tools="navigation-toggle" style={this.props.style}>
			<span>{this.props.children}</span>
		</div>
		);
	}
}

NavigationToggle.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object,
	target: React.PropTypes.string
};

NavigationToggle.defaultProps = { target: "#nav"};

module.exports = NavigationToggle;

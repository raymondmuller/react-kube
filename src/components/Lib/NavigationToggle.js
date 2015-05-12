const React = require("react");
var classNames = require("classnames");

class NavigationToggle extends React.Component {

	render() {
		let styles = {
			"navigation-toggle": true
		};

		return (
		<div className={classNames(this.props.className, styles)} data-tools="navigation-toggle" data-target={this.props.target}>
			<span>{this.props.children}</span>
		</div>
		);
	}
}

NavigationToggle.defaultProps = { target: "#nav"};

module.exports = NavigationToggle;

const React = require("react");
var classNames = require("classnames");

class NavigationBar extends React.Component {

	render() {

		let styles = classNames({
			"navbar": !this.props.vertical && !this.props.sub,
			"nav": this.props.vertical || this.props.stacked || this.props.stats && !this.props.sub,
			"nav-stacked": this.props.stacked,
			"nav-stats": this.props.stats,
			"navbar-left": this.props.left && !this.props.sub,
			"navbar-right": this.props.right && !this.props.sub
		});

		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: this.props.index + "" + i === this.props.active, index: i, onItemClick: this.props.onItemClick});
		}, this);

		return ( <ul className={classNames(this.props.className, styles)}>{children}</ul> );
	}
}

module.exports = NavigationBar;

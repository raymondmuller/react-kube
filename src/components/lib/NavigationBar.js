const React = require("react");
var classNames = require("classnames");

class NavigationBar extends React.Component {

	render() {

		let navBarClasses = classNames({
			"navbar": !this.props.vertical && !this.props.sub,
			"nav": this.props.vertical || this.props.stacked || this.props.stats && !this.props.sub,
			"nav-stacked": this.props.stacked,
			"nav-stats": this.props.stats,
			"navbar-left": this.props.left && !this.props.sub,
			"navbar-right": this.props.right && !this.props.sub
		});

		let navBarStyle = {
			marginTop: "1.65em"
		};

		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: this.props.index + "" + i === this.props.active, index: i, onItemClick: this.props.onItemClick});
		}, this);

		return (
			<ul className={classNames(this.props.className, navBarClasses)} style={navBarStyle}>
				{children}
			</ul> );
	}
}

NavigationBar.propTypes = {
	active: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.bool ]),
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	index: React.PropTypes.number,
	left: React.PropTypes.bool,
	onItemClick: React.PropTypes.func,
	right: React.PropTypes.bool,
	stacked: React.PropTypes.bool,
	stats: React.PropTypes.bool,
	style: React.PropTypes.object,
	sub: React.PropTypes.bool,
	vertical: React.PropTypes.bool
};

module.exports = NavigationBar;

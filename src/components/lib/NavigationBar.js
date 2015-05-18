import React from "react";
import classNames from "classnames";

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: this.props.active };
	}

	handleItemClick(index) {
		this.setState({
			active: index
		});
	}

	render() {

		let navBarClasses = classNames({
			"navbar": !this.props.vertical && !this.props.sub,
			"nav": this.props.vertical || this.props.stacked || this.props.stats && !this.props.sub,
			"nav-stacked": this.props.stacked,
			"nav-stats": this.props.stats,
			"navbar-left": this.props.left && !this.props.sub,
			"navbar-right": this.props.right && !this.props.sub,
			"wrap": this.props.wrap
		});

		let children = [];
		React.Children.forEach(this.props.children, (child, i) => {
			children.push(React.cloneElement(child, {active: i === this.state.active, key: i, index: i, onItemClick: this.handleItemClick.bind(this, i)}));
		});

		return (
			<nav className="navbar">
				<ul className={classNames(this.props.className, navBarClasses)} style={this.props.style}>
					{children}
				</ul>
			</nav>
		);
	}
}

NavigationBar.propTypes = {
	active: React.PropTypes.oneOfType([ React.PropTypes.number, React.PropTypes.bool]),
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
	vertical: React.PropTypes.bool,
	wrap: React.PropTypes.bool
};

NavigationBar.defaultProps = { active: -1 };

module.exports = NavigationBar;

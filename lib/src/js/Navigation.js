const React = require("react");
var classNames = require("classnames");

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: false };
	}

	handleItemClick(index, nav) {
		this.setState({
			active: index + "" + nav
		});
	}

	render() {
		let styles = classNames({
			"navbar-pills": this.props.pills,
			"nav-toggle": this.props.toggle,
			"fullwidth": this.props.fullwidth
		});
		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: this.state.active, onItemClick: this.handleItemClick.bind(this, i), index: i});
		}, this);

		return (
			<header className="group">
				<nav className={classNames(this.props.className, styles)} data-equals={this.props["data-equals"]} data-tools={this.props["data-tools"]} id={this.props.id} style={this.props.style}>
					{children}
				</nav>
			</header>
		);
	}
}

Navigation.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	fullwidth: React.PropTypes.bool,
	id: React.PropTypes.string,
	pills: React.PropTypes.bool,
	style: React.PropTypes.object,
	toggle: React.PropTypes.bool
};

module.exports = Navigation;

const React = require("react");
var classNames = require("classnames");

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: props.active };
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
				<nav id={this.props.id} className={classNames(this.props.className, styles)} data-equals={this.props["data-equals"]} data-tools={this.props["data-tools"]}>{children}</nav>
			</header>
		);
	}
}

Navigation.defaultProps = { active: "0-0"};

module.exports = Navigation;

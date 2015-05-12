const React = require("react");
const classNames = require("classnames");

class Tabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: "0-0" };
	}

	handleItemClick(index, nav) {
		this.setState({
			active: index + "" + nav
		});
	}

	render() {
		let styles = classNames({
			"nav-tabs": !this.props.pills,
			"navbar": this.props.pills,
			"navbar-pills": this.props.pills,
			"equals": this.props.equals
		});

		let children = React.Children.map(this.props.children, function(child, i) {
				return React.cloneElement(child, {active: this.state.active === i, onItemClick: this.handleItemClick.bind(this, i), index: i});
		}, this);

		return (
			<nav
				className={classNames(this.props.className, styles)}
				data-equals={this.props.equals}
				data-tools="tabs"
				style={this.props.style}>
					<ul>{children}</ul>
			</nav>
		);
	}
}

Tabs.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	equals: React.PropTypes.bool,
	pills: React.PropTypes.bool,
	rows: React.PropTypes.number,
	style: React.PropTypes.object,
	width: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

module.exports = Tabs;

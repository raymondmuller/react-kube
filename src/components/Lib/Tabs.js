const React = require("react");
var classNames = require("classnames");
var styles;

class Tabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: "0-0" }
	}
	componentWillMount() {
		styles = classNames({
			"nav-tabs": !this.props.pills,
			"navbar": this.props.pills,
			"navbar-pills": this.props.pills,
			"equals": this.props.equals
		})
	}

	handleItemClick(index, nav) {
		this.setState({
			active: index + "" + nav
		})	
	}

	render() {
			var children = React.Children.map(this.props.children, function(child, i) {
    return React.cloneElement(child, {active: this.state.active, onItemClick: this.handleItemClick.bind(this, i), index: i})
		}, this)

		return (
			<nav className={classNames(this.props.className, styles)} data-tools="tabs" data-equals="true">
				<ul>{children}</ul>
			</nav>
		)
	}

}

module.exports = Tabs;
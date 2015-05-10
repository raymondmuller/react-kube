const React = require("react");
var classNames = require("classnames");
var styles;

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: "0-0" }
	}
	componentWillMount() {
		styles = classNames({
			"navbar-pills": this.props.pills,
			"fullwidth": this.props.fullwidth
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
			<header className="group">
				<nav className={styles}>{children}</nav>
			</header>
		)
	}

}

module.exports = Navigation;
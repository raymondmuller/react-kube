const React = require("react");

var classNames = require("classnames");
var styles;

class NavigationBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: 0}
	}

	componentWillMount() {
		styles = classNames({
			"nav": true,
			"navbar-pills": this.props.pills,
			"navigationBarCustom": true,
			"fullwidth": this.props.fullwidth
		})
	}

	handleItemClick(id) {
		this.setState({
			active: id
		})
	}

	render() {
		var children = React.Children.map(this.props.children, function(child, i) {
    return React.cloneElement(child, {active: i === this.state.active ,id: i, onItemClick: this.handleItemClick.bind(this)})
		}, this)

		return (
			<nav className={styles}>
				<ul>
					{children}
				</ul>
			</nav>
		)
	}

}

module.exports = NavigationBar;
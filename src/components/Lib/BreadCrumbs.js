const React = require("react");
const classNames = require("classnames");

class BreadCrumbs extends React.Component {

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
			"breadcrumbs": true,
			"breadcrumbs-path": this.props.path
		});
		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: this.state.active, onItemClick: this.handleItemClick.bind(this, i), index: i});
		}, this);

		return (
			<nav className={classNames(this.props.className, styles)}>
				<ul>
				{children}
				</ul>
			</nav>
		);
	}
}

module.exports = BreadCrumbs;

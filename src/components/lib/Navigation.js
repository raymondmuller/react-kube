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

	componentDidMount() {
		this.navHeight = React.findDOMNode(this.refs.siteNavigation).offsetHeight;
		this.navHeight += 20;
		this.forceUpdate();
	}

	render() {
		let navClasses = classNames({
			"navbar-pills": this.props.pills,
			"nav-toggle": this.props.toggle,
			"fullwidth": this.props.fullwidth,
			"navigation-fixed": this.props.fixed
		});

		let navStyle = {
			minHeight: "50px"
		};

		let headerStyle = {};
		if("fixed" in this.props) {
			headerStyle = {
				marginBottom: this.navHeight
			};
		}

		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: this.state.active, onItemClick: this.handleItemClick.bind(this, i), index: i});
		}, this);

		return (
			<header className="group" style={headerStyle}>
				<nav className={classNames(this.props.className, navClasses)} data-equals={this.props["data-equals"]} data-tools={this.props["data-tools"]} id={this.props.id} ref="siteNavigation" style={navStyle}>
					{children}
				</nav>
			</header>
		);
	}
}

Navigation.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	fixed: React.PropTypes.bool,
	fullwidth: React.PropTypes.bool,
	id: React.PropTypes.string,
	pills: React.PropTypes.bool,
	toggle: React.PropTypes.bool
};

module.exports = Navigation;

const React = require("react");
var classNames = require("classnames");

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = { showFixed: false };
	}

	componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
		this.navHeight = React.findDOMNode(this.refs.siteNavigation).offsetHeight;
		this.navHeight += 20;
		this.forceUpdate();
	}

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
		if(window.pageYOffset > this.navHeight) {
			this.setState({
				showFixed: true
			});
		} else {
			this.setState({
				showFixed: false
			});
		}
  }

	render() {
		let navClasses = classNames({
			"navigation-toggle": this.props.toggle,
			"nav-fullwidth": this.props.fullwidth || this.state.showFixed,
			"navigation-fixed": this.props.fixed && this.state.showFixed
		});

		let navWidth = this.props.fullwidth || this.state.showFixed ? "100%" : "auto";

		let navStyle = {
			width: navWidth
		};

		return (
			<header className="group" id="header" style={this.props.style}>
				<div className={classNames(this.props.className, navClasses)} id="nav" ref="siteNavigation" style={navStyle}>
					{this.props.children}
				</div>
			</header>
		);
	}
}

Navigation.propTypes = {
	active: React.PropTypes.string,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	fixed: React.PropTypes.bool,
	fullwidth: React.PropTypes.bool,
	id: React.PropTypes.string,
	pills: React.PropTypes.bool,
	style: React.PropTypes.object,
	toggle: React.PropTypes.bool,
	wrap: React.PropTypes.bool
};

Navigation.defaultProps = { wrap: true };
module.exports = Navigation;

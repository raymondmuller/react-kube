import React from "react";
import classNames from "classnames";

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = { showFixed: false };
	}

	componentWillMount() {
		if(!this.props.id){
			console.error("Please assign an ID to the Navigation component");
		}
		window.addEventListener("resize", this.onResize.bind(this));
		this.onResize();
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll.bind(this));
		let navId = this.props.id;
		this.navHeight = React.findDOMNode(this.refs[navId]).offsetHeight;
		this.navHeight += 20;
		this.forceUpdate();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll.bind(this));
		window.removeEventListener("resize", this.onResize.bind(this));
	}

	handleScroll() {
		if(window.pageYOffset > this.navHeight) {
			this.setState({
				showFixed: true,
				collapsed: false
			});
		} else {
			this.setState({
				showFixed: false
			});
		}
	}

	handleToggleClick() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	onResize() {
		if(window.innerWidth < 767) {
			this.setState({
				mobile: true
			});
		} else {
			this.setState({
				mobile: false
			});
		}
	}

	render() {
		let navClasses = classNames({
			"nav-fullwidth": this.props.fullwidth || this.state.showFixed,
			"navigation-fixed": this.props.fixed && this.state.showFixed
		});

		let navWidth = this.props.fullwidth || this.state.showFixed ? "100%" : "auto";

		let navStyle = {
			width: navWidth
		};

		let toggleStyle = {
			display: this.state.mobile ? "block" : "none"
		};

		return (
				<div className={classNames(this.props.className, navClasses)} id={this.props.id} ref={this.props.id} style={navStyle}>
					{ this.props.responsive ? <div className="navigation-toggle" onClick={this.handleToggleClick.bind(this)} style={toggleStyle}>
						<span>{this.props.menuLabel}</span>
					</div> : null }
					{ !this.state.mobile || this.state.collapsed ? this.props.children : null }
				</div>
		);
	}
}

Navigation.propTypes = {
	active: React.PropTypes.string,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	fixed: React.PropTypes.bool,
	fullwidth: React.PropTypes.bool,
	id: React.PropTypes.string.isRequired,
	pills: React.PropTypes.bool,
	style: React.PropTypes.object,
	toggle: React.PropTypes.bool,
	wrap: React.PropTypes.bool
};

Navigation.defaultProps = { wrap: true };
module.exports = Navigation;

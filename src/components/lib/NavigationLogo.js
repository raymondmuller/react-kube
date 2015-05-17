const React = require("react");
var classNames = require("classnames");
class NavigationLogo extends React.Component {

	handleClick() {
		if(this.props.onItemClick) { this.props.onItemClick(); }
	}

	render() {
		let logoClasses = {
			"hide-on-mobile": !this.props.showOnMobile
		};

		return (
			<div className={classNames(this.props.className, logoClasses)} id="logo" onClick={this.handleClick.bind(this)} style={this.props.style}>
				<a href={this.props.url ? this.props.url : "/"} target="_self">
					{this.props.children}
				</a>
			</div>
		);
	}
}

NavigationLogo.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	onItemClick: React.PropTypes.func,
	showOnMobile: React.PropTypes.bool,
	style: React.PropTypes.object,
	url: React.PropTypes.string
};

NavigationLogo.defaultProps = {icon: null, showOnMobile: false};

module.exports = NavigationLogo;

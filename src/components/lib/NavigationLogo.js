import React from "react";
import classNames from "classnames";

class NavigationLogo extends React.Component {

	handleClick() {
		if(this.props.onItemClick) { this.props.onItemClick(); }
	}

	render() {
		let logoClasses = {
			"hide-on-mobile": !this.props.showOnMobile
		};

		return (
			<div className={classNames(this.props.className, logoClasses)} id={this.props.id} onClick={this.handleClick.bind(this)} style={this.props.style}>
				<a href={this.props.url ? this.props.url : "/"} target="_self">
					{this.props.children}
				</a>
			</div>
		);
	}
}

NavigationLogo.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	id: React.PropTypes.string.isRequired,
	onItemClick: React.PropTypes.func,
	showOnMobile: React.PropTypes.bool,
	style: React.PropTypes.object,
	url: React.PropTypes.string
};

NavigationLogo.defaultProps = {icon: null, showOnMobile: false};

module.exports = NavigationLogo;

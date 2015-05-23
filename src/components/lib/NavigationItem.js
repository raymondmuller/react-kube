import React from "react";
import classNames from "classnames";

class NavigationItem extends React.Component {

	handleClick() {
		this.props.onItemClick ? this.props.onItemClick(this.props.index) : null; //eslint-disable-line
		this.props.onClick ? this.props.onClick() : null; //eslint-disable-line
	}

	render() {
		let iconStyles = this.props.icon ? "fa " + "fa-" + this.props.icon : "";
		let classes = classNames({
			"active": this.props.active
		});
		return (
			<li className={classNames(this.props.className, classes)} id={this.props.id} index={this.props.index} onClick={this.handleClick.bind(this)} style={this.props.style}>
				{this.props.active ?
					<span className={iconStyles}>{this.props.children}</span> :
					<a href={this.props.url} style={{color: this.props.color ? this.props.color : "inherit", cursor: "pointer"}} target={this.props.target ? this.props.target : "_self"} >
						{this.props.children}
					</a> }
		</li>);
	}
}

NavigationItem.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	icon: React.PropTypes.string,
	id: React.PropTypes.string,
	index: React.PropTypes.number,
	onItemClick: React.PropTypes.func,
	style: React.PropTypes.object,
	sub: React.PropTypes.bool,
	target: React.PropTypes.string,
	url: React.PropTypes.string
};

NavigationItem.defaultProps = {icon: null};

module.exports = NavigationItem;

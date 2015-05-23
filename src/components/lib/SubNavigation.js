import React from "react";
import Dropdown from "./Dropdown";

class SubNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}

	handleClick() {
		this.props.onItemClick ? this.props.onItemClick(this.props.index) : null; //eslint-disable-line
		this.props.onClick ? this.props.onClick() : null; //eslint-disable-line
	}

	render() {
		// let iconStyles = this.props.icon ? "fa " + "fa-" + this.props.icon : ""; //icons disabled for now in sub navigation < todo

		let children = [];
		this.props.children.map((child) => {
			children.push(<div onClick={this.handleClick.bind(this)} style={{color: this.props.color, cursor: "pointer", width: "100%"}} target={child.props.target} url={child.props.url}>{child.props.children}</div>);
		});

		return (
			<Dropdown active={this.props.active} background={this.props.background} data={children} top={this.props.top}>
			<li className={this.props.className} id={this.props.id} index={this.props.index} onClick={this.handleClick.bind(this)} style={this.props.style}>
					<a style={{color: this.props.color, cursor: "pointer"}}><div style={{cursor: "pointer", display: "inline-block"}}>{this.props.title}</div><b className="caret"></b></a>
			</li>
		</Dropdown>);
	}
}

SubNavigation.propTypes = {
	active: React.PropTypes.bool,
	background: React.PropTypes.string,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	hover: React.PropTypes.bool,
	icon: React.PropTypes.string,
	id: React.PropTypes.string.isRequired,
	index: React.PropTypes.number,
	onItemClick: React.PropTypes.func,
	style: React.PropTypes.object,
	target: React.PropTypes.string,
	title: React.PropTypes.string,
	top: React.PropTypes.number,
	url: React.PropTypes.string
};

SubNavigation.defaultProps = {icon: null};

module.exports = SubNavigation;

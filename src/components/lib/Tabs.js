import React from "react";
import classNames from "classnames";

class Tabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: 0, tabs: []};
	}

	handleTabClick(index) {
		this.setState({
			active: index
		});
	}

	addTab(tab) {
		let tabs = this.state.tabs;
		tabs.push(tab);
		this.setState({
			tabs: tabs
		});
	}

	render() {

		let styles = classNames({
			"nav-tabs": !this.props.pills,
			"navbar": this.props.pills,
			"navbar-pills": this.props.pills
		});


		let tabs = this.state.tabs.map(function(item, i) {
			let isActive = this.state.active === i;

			let tabHeaderClasses = classNames({
				"active": isActive
			});

			let tabHeaderStyle = {
				cursor: "pointer"
			};

			return <li active={isActive} className={tabHeaderClasses} key={i} onClick={this.handleTabClick.bind(this, i)} style={tabHeaderStyle}><a >{item.title}</a></li>;
		}, this);

		let children = [];
		this.props.children.map(function(child, i) {
				children.push(React.cloneElement(child, {active: i === this.state.active, addTab: this.addTab.bind(this), key: children.length, index: i }));
		}, this);

		return (
			<span>
			<nav
				className={classNames(this.props.className, styles)}
				id={this.props.id}
				style={this.props.style}>
					<ul>
						{tabs}
					</ul>
			</nav>
			<div>
				{children}
			</div>
			</span>
		);
	}
}

Tabs.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	pills: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = Tabs;

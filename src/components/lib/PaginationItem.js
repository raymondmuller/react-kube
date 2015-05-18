import React from "react";
import classNames from "classnames";

class PaginationItem extends React.Component {

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {
		let styles = classNames({
			"active": this.props.active
		});

		return (
			<li className={classNames(this.props.className, styles)} index={this.props.index} onClick={this.handleClick.bind(this)} style={{cursor: "pointer"}}>
				<a href={this.props.url} target={this.props.target ? this.props.target : "_self"}>
					{this.props.children}
				</a>
		</li>);
	}
}

PaginationItem.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	index: React.PropTypes.number,
	onItemClick: React.PropTypes.func,
	style: React.PropTypes.object,
	target: React.PropTypes.string,
	url: React.PropTypes.string
};

module.exports = PaginationItem;

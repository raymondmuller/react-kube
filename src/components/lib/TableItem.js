import React from "react";

class TableItem extends React.Component {

	render() {
		return (
			<td className={this.props.className} style={this.props.style}>
			{this.props.children}
			</td>
		);
	}
}

TableItem.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = TableItem;

import React from "react";

import TableRow from "../lib/TableRow";
import TableItem from "../lib/TableItem";

class Prop extends React.Component {

	render() {
		return (
			<TableRow>
				<TableItem> {this.props.name} </TableItem>
				<TableItem> {this.props.type} </TableItem>
				<TableItem> {this.props.default} </TableItem>
				<TableItem> {this.props.required} </TableItem>
				<TableItem> {this.props.description}</TableItem>
			</TableRow>
		);
	}
}

Prop.propTypes = {
	default: React.PropTypes.string,
	description: React.PropTypes.string,
	name: React.PropTypes.string,
	required: React.PropTypes.string,
	type: React.PropTypes.string
};

Prop.defaultProps = {default: "-", required: "no"};

module.exports = Prop;





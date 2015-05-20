import React from "react";

import Accordion from "../lib/Accordion";
import Grid from "../lib/Grid";
import Table from "../lib/Table";
import TableHeader from "../lib/TableHeader";
import TableHead from "../lib/TableHead";

class PropTable extends React.Component {

	render() {
		return (
			<Grid>
				{ this.props.noLines ? null : <hr/> }
				<Accordion style={{backgroundColor: "#EC407A", color: "white"}} title={this.props.title ? this.props.title : "AVAILABLE PROPS"}>
					<Table hovered>
						<TableHeader>
							<TableHead> name </TableHead>
							<TableHead> type </TableHead>
							<TableHead> default </TableHead>
							<TableHead> required </TableHead>
							<TableHead> description </TableHead>
						</TableHeader>
						{this.props.children}
					</Table>
				</Accordion>
			</Grid>
		);
	}
}

PropTable.propTypes = {
	children: React.PropTypes.node.isRequired,
	noLines: React.PropTypes.bool,
	title: React.PropTypes.string
};

module.exports = PropTable;



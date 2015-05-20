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
				<hr/>
				<Accordion title="Available Props">
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

module.exports = PropTable;



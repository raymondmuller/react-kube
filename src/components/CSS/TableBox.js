const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");
const Table = require("../Lib/Table");
const TableHeader = require("../Lib/TableHeader");
const TableHead = require("../Lib/TableHead");
const TableRow = require("../Lib/TableRow");
const TableItem = require("../Lib/TableItem");

class TableBox extends React.Component {

	render() {
		return(
			<FormSection name="Table">
				<Grid>
					<GridItem size={50}>
						<Table flat>
						<TableHeader>
							<TableHead>header 1</TableHead>
							<TableHead>header 2</TableHead>
							<TableHead>header 3</TableHead>
							<TableHead>header 4</TableHead>
							</TableHeader>
							<TableRow>
								<TableItem>Item 1 </TableItem>
								<TableItem>Item 2 </TableItem>
								<TableItem>Item 3 </TableItem>
								<TableItem>Item 4 </TableItem>
							</TableRow>
						</Table>
						
					</GridItem>
					<GridItem size={50}>//TODO - Code sample and improve demo</GridItem>
				</Grid>
			</FormSection> 
		)
	}
}

module.exports = TableBox;
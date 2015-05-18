import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Select from "../lib/Select";
import SelectOption from "../lib/SelectOption";
import Table from "../lib/Table";
import TableHeader from "../lib/TableHeader";
import TableHead from "../lib/TableHead";
import TableRow from "../lib/TableRow";
import TableItem from "../lib/TableItem";
import Highlight from "react-highlight";

class TableBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {tableStyle: "flat"};
	}

	handleChange(e) {
		this.setState({
			tableStyle: e.target.value
		});
	}

	render() {
		return (
			<FormSection id="tableBox" name="Table">
				<Grid>
					<GridItem size={50}>
						<span>Choose a table style: </span>
						<Select id="tableSelect" onChange={this.handleChange.bind(this)}>
							<SelectOption value="flat">flat</SelectOption>
							<SelectOption value="bordered">bordered</SelectOption>
							<SelectOption value="hovered">hovered</SelectOption>
							<SelectOption value="simple">simple</SelectOption>
							<SelectOption value="stripped">stripped</SelectOption>
						</Select><br/><br/>
						<Table type={this.state.tableStyle}>
						<TableHeader>
							<TableHead>header 1</TableHead>
							<TableHead>header 2</TableHead>
							<TableHead>header 3</TableHead> 
							<TableHead>header 4</TableHead>
							</TableHeader>
							<TableRow>
								<TableItem>Item 1-1 </TableItem>
								<TableItem>Item 1-2 </TableItem>
								<TableItem>Item 1-3 </TableItem>
								<TableItem>Item 1-4 </TableItem>
							</TableRow>
							<TableRow>
								<TableItem>Item 2-1 </TableItem>
								<TableItem>Item 2-2 </TableItem>
								<TableItem>Item 2-3 </TableItem>
								<TableItem>Item 2-4 </TableItem>
							</TableRow>
						</Table>
					</GridItem>
					<GridItem size={50}>
						<Highlight>
							{"<Table type=\""}{this.state.tableStyle}{"\">"}<br/>
							&emsp;&emsp;{"<TableHeader>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<TableHead> title 1 </TableHead>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<TableHead> title 2 </TableHead>"}<br/>
							&emsp;&emsp;{"</TableHeader>"}<br/>
							&emsp;&emsp;{"<TableRow>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<TableItem> item 1-1 </TableItem>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<TableItem> item 1-2 </TableItem>"}<br/>
							&emsp;&emsp;{"</TableRow>"}<br/>
							&emsp;&emsp;{"<TableRow>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<TableItem> item 2-1 </TableItem>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<TableItem> item 2-2 </TableItem>"}<br/>
							&emsp;&emsp;{"</TableRow>"}<br/>
							{"</Table>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TableBox;

import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Select from "../lib/Select";
import SelectOption from "../lib/SelectOption";
import Table from "../lib/Table";
import TableHeader from "../lib/TableHeader";
import TableHead from "../lib/TableHead";
import TableRow from "../lib/TableRow";
import TableItem from "../lib/TableItem";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

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
					<hr/>
					<CodeSample noLines>
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
					</CodeSample>
					<PropTable title="TABLE: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Table frame attribute" name="frame" type="string" />
						<Prop default="false" description="Wraps the table in .table-container" name="responsive" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop description="bordered|flat|hovered|simple|stripped" name="type" type="string" />
					</PropTable>
					<PropTable title="TABLEHEADER: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="TABLEHEAD: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="TABLE ROW: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="TABLE ITEM: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TableBox;

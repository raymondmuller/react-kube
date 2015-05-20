import React from "react";

import Button from "../lib/Button";
import Dropdown from "../lib/Dropdown";
import FormSection from "../lib/FormSection";
import FormList from "../lib/FormList";
import Grid from "../lib/Grid";
import Input from "../lib/Input";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class DropdownBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: ""};
	}

	handleSelect(item) {
		this.setState({
			selected: item
		});
	}

	render() {
		return (
			<FormSection id="dropdownBox" name="Dropdown">
				<Grid>
					<FormList>
						<p>Selected value: {this.state.selected}</p><hr/>
						<Dropdown data={["Apple", "Banana", "Bread", "Cheese"]} onSelect={this.handleSelect.bind(this)}>
							<a>Show Dropdown</a>
						</Dropdown><br/><br/>
						<Dropdown data={["Apple", "Banana", "Bread", "Cheese"]} onSelect={this.handleSelect.bind(this)}>
							<Button>Show Dropdown</Button>
						</Dropdown>
						<br/>
						<Dropdown data={["Apple", "Banana", "Bread", "Cheese"]} onSelect={this.handleSelect.bind(this)}>
							<Input onSelect={this.handleSelect.bind(this)} value={this.state.selected} />
						</Dropdown>
					</FormList>
					<hr/>
					<CodeSample noLines>
						{"<Dropdown data={[\"Apple\", \"Banana\", \"Bread\", \"Cheese\"]} onSelect={this.handleSelect.bind(this)}/>"}<br/>
						&emsp;&emsp;{"<a>Show Dropdown</a>"}<br/>
						{"</Dropdown>"}
					</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="The options for the dropdown in an array" name="data" required="yes" type="array" />
						<Prop description="onSelect callback fn (passes value)" name="onSelect" type="function" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = DropdownBox;

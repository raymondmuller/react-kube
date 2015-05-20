import React from "react";

import Autocomplete from "../lib/Autocomplete";
import FormSection from "../lib/FormSection";
import FormList from "../lib/FormList";
import Select from "../lib/Select";
import SelectOption from "../lib/SelectOption";
import Grid from "../lib/Grid";

import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class AutocompleteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {rule: "contains"};
	}

	handleChange(e) {
		this.setState({
			rule: e.target.value
		});
	}

	render() {
		return (
			<FormSection id="autocompleteBox" name="Autocomplete">
				<Grid>
						<span>Choose a rule: </span>
						<Select id="tableSelect" onChange={this.handleChange.bind(this)}>
							<SelectOption value="contains">contains</SelectOption>
							<SelectOption value="exact">exact</SelectOption>
						</Select><br/><br/>
						<h3>Autocomplete (data is array)</h3>
						<FormList>
							<Autocomplete data={["Apple", "Banana", "Bread", "Cheese"]} description="data as array" label="Hungry?" rule={this.state.rule} />
						</FormList>
						<CodeSample>
							{"<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} description=\"data as array\" label=\"Hungry?\" rule=\""}{this.state.rule}{"\"/>"}
						</CodeSample>
						<h3>Autocomplete (data is object / highlight on)</h3>
						<FormList>
							<Autocomplete data={[{value: 1, label: "yo"}, {value: 2, label: "yeah"}]} description="data as object" highlight label="What?" rule={this.state.rule} />
						</FormList>
						<hr/>
						<CodeSample noLines>
							{"<Autocomplete data={[{value: 1, label: \"yo\"}, {value: 2, label: \"yeah\"}]} description=\"data as object\" highlight label=\"What?\" rule=\""}{this.state.rule}{"\"/>"}
						</CodeSample>
						<PropTable>
							<Prop description="CSS class content" name="className" type="string" />
							<Prop description="Data for the Autocomplete" name="data" type="array or object ({label: '', value: ''})" />
							<Prop description="Input description" name="description" type="string" />
							<Prop default="false" description="Highlight matching text?" name="highlight" type="boolean" />
							<Prop description="Label for the input field" name="label" type="string" />
							<Prop description="Style for the panel" name="limit" type="object" />
							<Prop description="CSS Class for the dropdown list" name="listClassName" type="object" />
							<Prop description="onBlur(value) callback" name="onBlur" type="function" />
							<Prop description="onChange(value) callback" name="onChange" type="function" />
							<Prop description="onSelect(value) callback" name="onSelect" type="function" />
							<Prop description="Input placeholder value" name="placeholder" type="string" />
							<Prop default="false" description="Is the input required?" name="required" type="boolean" />
							<Prop default="contains" description="exact or contains" name="rule" type="string" />
							<Prop description="Style object" name="style" type="object" />
							<Prop description="Value of the input field" name="value" type="string" />
							<Prop description="Width of the input field(10, 20, 50, 100...)" name="width" type="string or number" />
						</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AutocompleteBox;

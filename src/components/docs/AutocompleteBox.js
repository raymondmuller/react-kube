import React from "react";

import Autocomplete from "../lib/Autocomplete";
import FormSection from "../lib/FormSection";
import FormList from "../lib/FormList";
import Select from "../lib/Select";
import SelectOption from "../lib/SelectOption";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Highlight from "react-highlight";

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
					<GridItem size={50}>
						<span>Choose a rule: </span>
						<Select id="tableSelect" onChange={this.handleChange.bind(this)}>
							<SelectOption value="contains">contains</SelectOption>
							<SelectOption value="exact">exact</SelectOption>
						</Select><br/><br/>
						<FormList>
							<Autocomplete data={["Apple", "Banana", "Bread", "Cheese"]} description="data as array" label="Hungry?" rule={this.state.rule} /><br/>
						</FormList>
						<Autocomplete data={[{value: 1, label: "yo"}, {value: 2, label: "yeah"}]} description="data as object" highlight label="What?" rule={this.state.rule} /><br/>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} description=\"data as array\" label=\"Hungry?\" rule=\""}{this.state.rule}{"\"/><br/>"}
						</Highlight>
						
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AutocompleteBox;

const React = require("react");

const Autocomplete = require("../lib/Autocomplete");
const FormSection = require("../lib/FormSection");
const FormList = require("../lib/FormList");
const Select = require("../lib/Select");
const SelectOption = require("../lib/SelectOption");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

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
			<FormSection name="Autocomplete">
				<Grid>
					<GridItem size={50}>
						<span>Choose a rule: </span>
						<Select id="tableSelect" onChange={this.handleChange.bind(this)}>
							<SelectOption value="contains">contains</SelectOption>
							<SelectOption value="exact">exact</SelectOption>
						</Select><br/><br/>
						<FormList>
							<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} description="data as array" label="Hungry?" rule={this.state.rule} /><br/>
						</FormList>
						<Autocomplete data={[{value: 1, label: "yo"}, {value: 2, label: "yeah"}]} description="data as object" highlight label="What?" rule={this.state.rule} /><br/>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} description=\"data as array\" label=\"Hungry?\" rule=\""}{this.state.rule}{"\"/><br/>"}
						</Highlight>
						<Highlight className="javascript">
						{"<Autocomplete data={[{value: 1, label: \"yo\"}, {value: 2, label: \"yeah\"}]} description=\"data as object\" label=\"What?\" rule=\""}{this.state.rule}{"\" />"}
						</Highlight>
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AutocompleteBox;

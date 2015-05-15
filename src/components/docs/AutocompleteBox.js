const React = require("react");

const Autocomplete = require("../lib/Autocomplete");
const FormSection = require("../lib/FormSection");
const FormList = require("../lib/FormList");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

class AutocompleteBox extends React.Component {

	render() {
		return (
			<FormSection name="Autocomplete">
				<Grid>
					<GridItem size={50}>
						<FormList>
							<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} description="data as array" label="Hungry?"/><br/>
						</FormList>
						<Autocomplete data={[{value: 1, label: "yo"}, {value: 2, label: "yeah"}]} description="data as object" label="What?" /><br/>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} description=\"data as array\" label=\"Hungry?\"/><br/>"}
						</Highlight>
						<Highlight className="javascript">
						{"<Autocomplete data={[{value: 1, label: \"yo\"}, {value: 2, label: \"yeah\"}]} description=\"data as object\" label=\"What?\" />"}
						</Highlight>
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AutocompleteBox;

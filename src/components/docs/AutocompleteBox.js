const React = require("react");

const Autocomplete = require("../lib/Autocomplete");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

class AutocompleteBox extends React.Component {

	render() {
		return (
			<FormSection name="Autocomplete">
				<Grid>
					<GridItem size={50}>
						<Autocomplete data={['Apple', 'Banana', 'Bread', 'Cheese']} /><br/>
						<Autocomplete data={[{value: 1, label: "yo"}, {value: 2, label: "yeah"}]} /><br/>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Autocomplete data=\"['Apple', 'Banana', 'Cheese']\" />"}
						</Highlight>
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AutocompleteBox;

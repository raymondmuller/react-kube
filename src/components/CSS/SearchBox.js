const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");
const Search = require("../Lib/Search");

class SearchBox extends React.Component {

	render() {
		return (
			<FormSection name="Search">
					<Grid>
						<GridItem size={50}>
							<Search placeholder="normal search"/><br/>
							<Search rounded placeholder="rounded search"/>
						</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
			</FormSection>
		);
	}
}

module.exports = SearchBox;

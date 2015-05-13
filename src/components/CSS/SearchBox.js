const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Search = require("../lib/Search");

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

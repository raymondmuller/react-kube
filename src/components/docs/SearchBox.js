const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Search = require("../lib/Search");
const Highlight = require("react-highlight");

class SearchBox extends React.Component {

	render() {
		return (
			<FormSection id="searchBox" name="Search">
					<Grid>
						<GridItem size={50}>
							<Search placeholder="normal search"/><br/>
							<Search rounded placeholder="rounded search"/>
						</GridItem>
						<GridItem className="demo" size={50}>
							<Highlight className="javascript">
							{"<Search placeholder=\"normal search\"/>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Search rounded placeholder=\"round search box\"/>"}
						</Highlight>
						</GridItem>
					</Grid>
			</FormSection>
		);
	}
}

module.exports = SearchBox;

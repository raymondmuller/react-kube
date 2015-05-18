import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Search from "../lib/Search";
import Highlight from "react-highlight";

class SearchBox extends React.Component {

	render() {
		return (
			<FormSection id="searchBox" name="Search">
					<Grid>
						<GridItem size={50}>
							<Search placeholder="normal search"/><br/>
							<Search placeholder="rounded search" rounded />
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

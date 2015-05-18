import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Livesearch from "../lib/Livesearch";
import Highlight from "react-highlight";

class LivesearchBox extends React.Component {

	render() {
		return (
			<FormSection id="livesearchBox" name="Livesearch">
				<Grid>
					<GridItem size={50}>
						<Livesearch data={["Apple", "Banana", "Bread", "Cheese"]} />
					</GridItem>
					<GridItem className="demo" size={50}>
						<p>Note: For the moment these are mainly just styles. This component is not doing anything yet, expect for searching in an array :) Working on that (<a href="https://github.com/raymondmuller/react-kube/issues/8" target="_new"><li className="fa fa-github"></li> Livesearch Issue</a>)</p>
						<Highlight className="javascript">
							{"<Livesearch />"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = LivesearchBox;

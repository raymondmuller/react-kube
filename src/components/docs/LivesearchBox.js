import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Livesearch from "../lib/Livesearch";
import CodeSample from "./CodeSample";

class LivesearchBox extends React.Component {

	render() {
		return (
			<FormSection id="livesearchBox" name="Livesearch">
				<Grid>
					<Livesearch data={["Apple", "Banana", "Bread", "Cheese"]} />
					<div>
						<span>Note: For the moment these are mainly just styles. This component is not doing anything yet, expect for searching in an array :) This needs further investigation. If you have suggestions, please contact me or log an issue at </span>
						<span><li className="fa fa-github"></li><a href="https://github.com/raymondmuller/react-kube/" target="_new"> Github</a></span>
					</div>
					<CodeSample>
						{"<Livesearch data={[\"Apple\", \"Banana\", \"Bread\", \"Cheese\"]}/>"}
					</CodeSample>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = LivesearchBox;

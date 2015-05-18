import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import TextFit from "../lib/TextFit";
import Highlight from "react-highlight";

class TextFitBox extends React.Component {

	render() {
		return (
			<FormSection id="textFitBox" name="TextFit">
				<Grid>
					<GridItem size={50}>
						<TextFit>
							<h2>This text will resize automatically when the window size changes</h2>
						</TextFit>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<TextFit>"}<br/>
							&emsp;&emsp;{"<h2>This text will resize automatically when the window size changes</h2>"}<br/>
							{"</TextFit>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TextFitBox;

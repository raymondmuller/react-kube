import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Upload from "../lib/Upload";
import Highlight from "react-highlight";

class Uploadbox extends React.Component {

	render() {
		return (
			<FormSection id="uploadBox" name="Upload">
				<Grid>
					<GridItem size={50}>
						<Upload/>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Upload onDrop={this.handleFileDrop.bind(this)} />"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = Uploadbox;

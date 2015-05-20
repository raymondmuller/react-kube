import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Upload from "../lib/Upload";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class Uploadbox extends React.Component {

	render() {
		return (
			<FormSection id="uploadBox" name="Upload">
				<Grid>
						<Upload onDrop={function() { return; }}/>
						<hr/>
						<CodeSample noLines>
							{"<Upload onDrop={this.handleFileDrop.bind(this)} />"}
						</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="onDrop callback fn" name="onDrop" required="yes" type="function" />
						<Prop description="Upload placeholder" name="placeholder" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = Uploadbox;

import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import TextFit from "../lib/TextFit";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class TextFitBox extends React.Component {

	render() {
		return (
			<FormSection id="textFitBox" name="TextFit">
				<Grid>
					<TextFit>
						<h2>This text will resize automatically when the window size changes</h2>
					</TextFit>
					<hr/>
					<CodeSample noLines>
						{"<TextFit>"}<br/>
						&emsp;&emsp;{"<h2>This text will resize automatically when the window size changes</h2>"}<br/>
						{"</TextFit>"}
					</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop default="1.0" description="compress value" name="compressor" type="number" />
						<Prop default="Number.NEGATIVE_INFINITY" description="minimal font size" name="minFontSize" type="number" />
						<Prop default="Number.POSITIVE_INFINITY" description="maximum font size" name="maxFontSize" type="number" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TextFitBox;

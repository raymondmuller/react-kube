const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const TextFit = require("../lib/TextFit");
const Highlight = require("react-highlight");

class TextFitBox extends React.Component {

	render() {
		return (
			<FormSection name="TextFit">
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

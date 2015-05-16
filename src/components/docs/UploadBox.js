const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Upload = require("../lib/Upload");
const Highlight = require("react-highlight");

class Uploadbox extends React.Component {

	render() {
		return (
			<FormSection id="#buttons" name="Buttons">
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

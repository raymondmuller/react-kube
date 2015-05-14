const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Button = require("../lib/Button");
const Tooltip = require("../lib/Tooltip");
const Highlight = require("react-highlight");

class TooltipBox extends React.Component {

	render() {
		return (
			<FormSection name="Tooltip">
				<Grid>
					<GridItem size={50}>
						Not working yet.
						<Tooltip color="red">I am a tooltip</Tooltip>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
						{"todo"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TooltipBox;

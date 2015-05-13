const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Label = require("../lib/Label");
const Badge = require("../lib/Badge");
class LabelBox extends React.Component {

	render() {
		return (
			<FormSection name="Labels & Badges">
				<Grid>
					<GridItem size={50}>
						<Label color="red">Normal</Label> <span> </span>
						<Label outline color="yellow">Outline</Label><span> </span>
						<Label outline color="black">Black</Label> <br/>
						<hr/>
						<Badge>1</Badge><span> </span>
						<Badge outline color="green">s</Badge>
					</GridItem>
					<GridItem size={50}>//TODO - Code sample</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = LabelBox;

const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");

class FormBox extends React.Component {

	render() {
		return(
			<FormSection name="Forms">
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
		)
	}
}

module.exports = FormBox;
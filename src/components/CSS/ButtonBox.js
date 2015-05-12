const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");
const Button = require("../Lib/Button");
const SubmitButton = require("../Lib/SubmitButton");
const LinkButton = require("../Lib/LinkButton");

class ButtonBox extends React.Component {

	render() {
		return(
			<FormSection name="Buttons">
				<Grid>
					<GridItem size={50}>
						<Button color="red">Normal</Button> <span> </span>
						<Button outline color="yellow">Outline</Button><span> </span>
						<hr/>
							<SubmitButton color="blue">Submit</SubmitButton> <br/><br/>
							<LinkButton color="green">LinkButton</LinkButton>
					</GridItem>
					<GridItem size={50}>//TODO - Code sample</GridItem>
				</Grid>
			</FormSection> 
		)
	}
}

module.exports = ButtonBox;
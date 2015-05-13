const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Button = require("../lib/Button");
const SubmitButton = require("../lib/SubmitButton");
const LinkButton = require("../lib/LinkButton");

class ButtonBox extends React.Component {

	render() {
		return (
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
		);
	}
}

module.exports = ButtonBox;

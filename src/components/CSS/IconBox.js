const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");
const Button = require("../Lib/Button");

class IconBox extends React.Component {

	render() {
		return(
			<FormSection name="Icons">
				<Grid>
					<GridItem size={50}>
						For now you can (only) add items to buttons. I will extend this functionality to more components later
						<br/><br/>
						<Button icon="github"> Github</Button><span> </span>
						<Button color="blue" icon="facebook"> Facebook</Button>
					</GridItem>
					<GridItem size={50}>//TODO - Code sample</GridItem>
				</Grid>
			</FormSection>
		)
	}
}

module.exports = IconBox;
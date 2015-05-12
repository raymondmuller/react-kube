import React from "react";
import FormSection from "../Lib/FormSection";
import Grid from "../Lib/Grid";
import GridItem from "../Lib/GridItem";
import Button from "../Lib/Button";

class IconBox extends React.Component {

	render() {
		return (
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
		);
	}
}

module.exports = IconBox;
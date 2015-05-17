import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Button from "../lib/Button";
import Highlight from "react-highlight";

class IconBox extends React.Component {

	render() {
		return (
			<FormSection id="iconBox" name="Icons">
				<Grid>
					<GridItem size={50}>
						For now you can (only) add icons to buttons. I will extend this functionality to more components later
						<br/><br/>
						<Button icon="github"> Github</Button><span> </span>
						<Button color="blue" icon="facebook"> Facebook</Button>
					</GridItem>
					<GridItem className="demo" size={50}>
						<p className="bold">Note that <a href="http://fortawesome.github.io/Font-Awesome/" target="_new">FontAwesome</a> is a must for this to work!</p>
						<Highlight className="javascript">
							{'<Button icon="github"> Github </Button>'}
						</Highlight>
						<Highlight className="javascript">
							{'<Button color="blue" icon="facebook"> Facebook </Button>'}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = IconBox;

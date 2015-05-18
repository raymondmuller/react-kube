import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Button from "../lib/Button";
import SubmitButton from "../lib/SubmitButton";
import LinkButton from "../lib/LinkButton";
import Highlight from "react-highlight";

class ButtonBox extends React.Component {

	render() {
		return (
			<FormSection id="buttonBox" name="Buttons">
				<Grid>
					<GridItem size={50}>
						<Button color="red"> Normal </Button><br/><br/>
						<Button outline color="yellow"> Outline </Button><span> </span>
						<hr/>
							<SubmitButton color="blue">Submit</SubmitButton> <br/><br/>
							<LinkButton color="green">LinkButton</LinkButton>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Button color=\"red\"> Normal </Button>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Button outline color=\"yellow\"> Outline </Button>"}
						</Highlight>
						<hr/>
						<Highlight className="javascript">
							{"<SubmitButton outline color=\"yellow\"> Submit </SubmitButton>"}
						</Highlight>
						<Highlight className="javascript">
							{"<LinkButton color=\"yellow\" url=\"http://www.raymondmuller.com\"> Link to </LinkButton>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ButtonBox;

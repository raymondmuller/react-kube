import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Button from "../lib/Button";
import SubmitButton from "../lib/SubmitButton";
import LinkButton from "../lib/LinkButton";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class ButtonBox extends React.Component {

	render() {
		return (
			<FormSection id="buttonBox" name="Buttons">
				<Grid>
				<GridItem size={30}>
						<Button color="red"> Normal </Button>
				</GridItem>
				<GridItem size={70}>
						<CodeSample noLines>
							{"<Button color=\"red\"> Normal </Button>"}
						</CodeSample>
				</GridItem>
				<GridItem size={30}>
						<Button bold color="yellow" outline> Bold Outline </Button>
				</GridItem>
				<GridItem size={70}>
						<CodeSample noLines>
							{"<Button bold outline color=\"yellow\"> Outline </Button>"}
						</CodeSample>
				</GridItem>
				<GridItem size={30}>
						<SubmitButton color="blue" outline round small>round small outline submit</SubmitButton>
				</GridItem>
				<GridItem size={70}>
						<CodeSample noLines>
							{"<SubmitButton color=\"blue\" outline round small> Submit </SubmitButton>"}
						</CodeSample>
				</GridItem>
				<GridItem size={30}>
						<LinkButton big color="green" target="_new" url="http://www.raymondmuller.com">Big LinkButton</LinkButton>
				</GridItem>
				<GridItem size={70}>
						<CodeSample noLines>
							{"<LinkButton big color=\"green\" url=\"http://www.raymondmuller.com\" target=\"_new\"> Link to </LinkButton>"}
						</CodeSample>
				</GridItem>
				</Grid>
				<PropTable>
					<Prop default="false" description="Bigger button" name="big" type="boolean" />
					<Prop default="false" description="Adds a bold style to the button" name="bold" type="boolean" />
					<Prop description="CSS class" name="className" type="string" />
					<Prop description="red|blue|black|green|yellow" name="color" type="string" />
					<Prop default="false" description="Disables the button" name="disabled" type="boolean" />
					<Prop description="Adds an icon to the button (font-awesome is required)" name="icon" type="string" />
					<Prop description="Positions the button - left" name="left" type="boolean" />
					<Prop description="onClick callback fn" name="onClick" type="function" />
					<Prop default="false" description="An outlined button" name="outline" type="boolean" />
					<Prop description="Positions the button - right" name="right" type="boolean" />
					<Prop default="false" description="Adds border radius" name="round" type="boolean" />
					<Prop default="false" description="Small button" name="small" type="boolean" />
					<Prop default="false" description="Even smaller button" name="smaller" type="boolean" />
					<Prop description="Style attribute" name="style" type="object" />
					<Prop description="Button type attribute" name="type" type="string" />
					<Prop description="Button value attribute" name="value" type="string" />
				</PropTable>
			</FormSection>
		);
	}
}

module.exports = ButtonBox;

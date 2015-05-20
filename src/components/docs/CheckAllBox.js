import React from "react";

import CheckBox from "../lib/CheckBox";
import CheckAll from "../lib/CheckAll";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Form from "../lib/Form";
import FormList from "../lib/FormList";
import Highlight from "react-highlight";

class CheckAllBox extends React.Component {
	constructor(props){
		super(props);
		this.state = { checkboxValue: "on", checkboxChecked: false, radioValue: ""};
	}

	handleCheckBoxChange(isChecked, value) {
		this.setState({
			checkboxChecked: isChecked,
			checkboxValue: value
		});
	}

	render() {
		return (
			<FormSection id="checkAllBox" name="Check All">
				<Grid>
					<GridItem size={50}>
					<Form>
						<FormSection name="Form Section">
							<FormList>
			<CheckAll highlight label="enable all" label2="disable all"><br/>
				<CheckBox id="check1">first</CheckBox><br/>
				<CheckBox id="check2">second</CheckBox><br/>
			</CheckAll>
							</FormList>
						</FormSection>
					</Form>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<FormSection name=\"Forms\"> content </FormSection>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = CheckAllBox;



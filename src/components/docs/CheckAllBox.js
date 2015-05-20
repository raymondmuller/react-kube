import React from "react";

import CheckBox from "../lib/CheckBox";
import CheckAll from "../lib/CheckAll";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Form from "../lib/Form";
import FormList from "../lib/FormList";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

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
					<Form>
						<GridItem size={30}>
							<FormList>
								<CheckAll highlight label="enable all" label2="disable all">
									<CheckBox id="check1">first</CheckBox>
									<CheckBox id="check2">second</CheckBox>
								</CheckAll>
							</FormList>
							</GridItem>
							<GridItem size={70}>
							<CodeSample noLines>
							{"<CheckAll highlight label=\"enable all\" label2=\"disable all\">"}<br/>
							&emsp;&emsp;{"<CheckBox id=\"check1\">first</CheckBox>"}<br/>
							&emsp;&emsp;{"<CheckBox id=\"check2\">second</CheckBox>"}<br/>
							{"</CheckAll>"}
						</CodeSample>
						</GridItem>
						<br/><br/><br/><br/>
						<GridItem size={30}>
						<FormList>
							<CheckAll bottom highlight inline label="enable all" label2="disable all">
								<CheckBox id="check1">one</CheckBox>
								<CheckBox id="check2">two</CheckBox>
							</CheckAll>
						</FormList>
							</GridItem>
							<GridItem size={70}>
						<CodeSample noLines>
							{"<CheckAll bottom highlight inline label=\"enable all\" label2=\"disable all\">"}<br/>
							&emsp;&emsp;{"<CheckBox id=\"check1\">one</CheckBox>"}<br/>
							&emsp;&emsp;{"<CheckBox id=\"check2\">two</CheckBox>"}<br/>
							{"</CheckAll>"}
						</CodeSample>
						</GridItem>
					</Form>
				</Grid>
				<PropTable title="CHECK ALL: AVAILABLE PROPS">
					<Prop default="false" description="Check all checkbox at the bottom or top?" name="bottom" type="boolean" />
					<Prop description="CSS class" name="className" type="string" />
					<Prop default="false" description="Disable checkbox" name="disabled" type="boolean" />
					<Prop default="false" description="Highlight checked options" name="highlight" type="boolean" />
					<Prop default="false" description="Inline allignment" name="inline" type="boolean" />
					<Prop description="Checkbox label" name="label" type="string" />
					<Prop description="Checkbox label when disabled" name="label2" type="string" />
					<Prop description="onChange callback fn (passes value)" name="onChange" type="function" />
					<Prop description="Style attribute" name="style" type="object" />
				</PropTable>
				<PropTable title="SINGLE CHECKBOX: AVAILABLE PROPS">
					<Prop default="false" description="set default checked value" name="checked" type="boolean" />
					<Prop description="CSS class" name="className" type="string" />
					<Prop default="false" description="Disable checkbox" name="disabled" type="boolean" />
					<Prop default="false" description="Highlight checked option" name="highlight" type="boolean" />
					<Prop default="false" description="Inline allignment" name="inline" type="boolean" />
					<Prop description="Class attribute for the label" name="labelClassName" type="string" />
					<Prop description="onChange callback fn (passes value)" name="onChange" type="function" />
					<Prop description="Style attribute" name="style" type="object" />
					<Prop description="Set checkbox value" name="value" type="string or number" />
				</PropTable>
			</FormSection>
		);
	}
}

module.exports = CheckAllBox;



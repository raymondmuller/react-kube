import React from "react";

import CheckBox from "../lib/CheckBox";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Form from "../lib/Form";
import Input from "../lib/Input";
import RadioButton from "../lib/RadioButton";
import FormList from "../lib/FormList";
import Button from "../lib/Button";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class FormBox extends React.Component {
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

	handleRadioChange(value){
		this.setState({
			radioValue: value
		});
	}

	render() {
		return (
			<FormSection id="formBox" name="Forms">
				<Grid>
					<Form>
						<FormSection name="Form Section">
							<CodeSample>
								{"<FormSection name=\"Forms\"> ... </FormSection>"}
							</CodeSample>

							<span> New form row? use FormList</span>
							<CodeSample>
								{"<FormList> ...</FormList>"}
							</CodeSample>
							<FormList>
								<Input placeholder="normal input (width=100)" width={100} />
							</FormList>
							<CodeSample>
								{"<Input width={100} placeholder=\"normal input (width=100)\"/>"}
							</CodeSample>

							<FormList>
								<Input label="With a label" width={100} />
							</FormList>
							<CodeSample>
								{"<Input label=\"with a label\" />"}
							</CodeSample>

							<FormList>
								<Input label="required" required width={100} /><br/>
							</FormList>
							<CodeSample>
								{"<Input required />"}
							</CodeSample>

							<FormList>
								<Input description="and a description" label="With a label" width={100} /><br/>
							</FormList>
							<CodeSample>
								{"<Input description=\"with a description\" label=\"label\"/>"}
							</CodeSample>

							<FormList>
								<Input label="Success!" success successMessage="Good job!" width={50} /><br/>
							</FormList>
							<CodeSample>
								{"<Input success successMessage=\"Good job!\" label=\"Success!\" width={50}/>"}
							</CodeSample>

							<FormList>
								<Input error errorMessage="Oh no!" label="Error!" width={50} /><br/>
							</FormList>
							<CodeSample>
								{"<Input error errorMessage=\"Oh no!\" label=\"Error!\" width={50}/>"}
							</CodeSample>

							<FormList className="btn-black">
								<Input black placeholder="on black" width={100}/><br/>
							</FormList>
							<CodeSample>
								{"<Input black placeholder=\"on black\" width={100} />"}
							</CodeSample>

						</FormSection>

						<FormSection name="Example">
							<FormList>
								<Input label="E-mail" required width={100} />
							</FormList>
							<FormList>
								<Input label="Password" required type="password" width={100} />
							</FormList>
							<FormList>
								<Button color="green">Login</Button><span> </span>
								<Button color="blue">Sign Up</Button>
							</FormList>
							<CodeSample>
								{"<FormSection name=\"Example\">"}<br/>
								&emsp;&emsp;{"<FormList>"}<br/>
								&emsp;&emsp;&emsp;&emsp;{"<Input required label=\"E-mail\"/>"}<br/>
								&emsp;&emsp;{"</FormList>"}<br/>
								&emsp;&emsp;{"<FormList>"}<br/>
								&emsp;&emsp;&emsp;&emsp;{"<Input required type=\"password\" label=\"Password\"/>"}<br/>
								&emsp;&emsp;{"</FormList>"}<br/>
								&emsp;&emsp;{"<FormList>"}<br/>
								&emsp;&emsp;{"<FormList>"}<br/>
								&emsp;&emsp;&emsp;&emsp;{"<Button color=\"green\">Login</Button> <Button color=\"blue\">Sign Up</Button>"}<br/>
								&emsp;&emsp;{"</FormList>"}<br/>
								{"</FormSection>"}
							</CodeSample>

							<FormList>
								<CheckBox id="check1" onChange={this.handleCheckBoxChange.bind(this)} value="yes">A checkbox</CheckBox><br/>
								<p> checkbox value = {this.state.checkboxValue} - checked = {this.state.checkboxChecked.toString()} </p>
							</FormList>
							<CodeSample>
								{"<CheckBox onChange={this.handleCheckBoxChange.bind(this)}>"}<br/>
								&emsp;&emsp;{"A checkbox"}<br/>
								{"</CheckBox>"}
							</CodeSample>

							<FormList>
								<RadioButton checked={true} name="q" onChange={this.handleRadioChange.bind(this)} value="yes">yes</RadioButton><br/>
								<RadioButton name="q" onChange={this.handleRadioChange.bind(this)} value="no">no</RadioButton><br/>
								<p> radio value = {this.state.radioValue} </p>
							</FormList>
							<CodeSample>
								{"<RadioButton checked={true} name=\"q\" onChange={this.handleRadioChange.bind(this)} value=\"yes\">"}<br/>
								&emsp;&emsp;{"yes"}<br/>
								{"</RadioButton>"}<br/>
								{"<RadioButton name=\"q\" onChange={this.handleRadioChange.bind(this)} value=\"no\">"}<br/>
								&emsp;&emsp;{"no"}<br/>
								{"</RadioButton>"}
							</CodeSample>
						</FormSection>
					</Form>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = FormBox;

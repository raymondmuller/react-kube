import React from "react";

import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Form from "../lib/Form";
import Input from "../lib/Input";
import FormList from "../lib/FormList";
import Button from "../lib/Button";
import Highlight from "react-highlight";

class FormBox extends React.Component {

	render() {
		return (
			<FormSection id="formBox" name="Forms">
				<Grid>
					<GridItem size={50}>
					<Form>
						<FormSection name="Form Section">
							<FormList>
								<Input width={100} placeholder="normal input (width=100)"/>
							</FormList>
							<FormList>
								<Input width={100} label="With a label"/>
							</FormList>
							<FormList>
								<Input width={100} label="required" required /><br/>
							</FormList>
							<FormList>
								<Input width={100} label="With a label" description="and a description" /><br/>
							</FormList>
							<FormList>
								<Input width={100} success successMessage="Good job!" label="Success!" /><br/>
							</FormList>
							<FormList>
								<Input width={50} error errorMessage="Oh no!" label="Error!" /><br/>
							</FormList>
							<FormList className="btn-black">
								<Input width={100} black placeholder="on black" /><br/>
							</FormList>
						</FormSection>
						<FormSection name="Example">
							<FormList>
								<Input width={100} required label="E-mail"/>
							</FormList>
							<FormList>
								<Input width={100} required type="password" label="Password"/>
							</FormList>
							<FormList>
								<Button color="green">Login</Button><span> </span>
								<Button color="blue">Sign Up</Button>
							</FormList>
						</FormSection>
					</Form>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<FormSection name=\"Forms\"> content </FormSection>"}
						</Highlight>
						<span> new line? use a FormList</span>
						<Highlight className="javascript">
							{"<FormList> content </FormList>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Input width={100} placeholder=\"normal input (width=100)\"/>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Input label=\"with a label\" />"}
						</Highlight>
						<Highlight className="javascript">
							{"<Input required />"}
						</Highlight>
						<Highlight className="javascript">
							{"<Input description=\"with a description\" label=\"label\"/>"}
						</Highlight>
						<Highlight>
							{"<Input width={100} success successMessage=\"Good job!\" label=\"Success!\" />"}
						</Highlight>
						<Highlight>
							{"<Input width={100} error errorMessage=\"Oh no!\" label=\"Error!\" />"}
						</Highlight>
						<Highlight>
							{"<Input black placeholder=\"on black\" />"}
						</Highlight>
						<hr/>
						<Highlight>
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
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = FormBox;

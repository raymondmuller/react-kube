const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");

const Form = require("../lib/Form");
const Input = require("../lib/Input");
const FormList = require("../lib/FormList");
const Button = require("../lib/Button");

class FormBox extends React.Component {

	render() {
		return (
			<FormSection name="Forms">
				<Grid>
					<GridItem size={50}>
					<Form>
						<FormSection name="Form Section">
							<FormList>
								<Input width={100} placeholder="normal input (width=100)"/>
							</FormList>
							<FormList>
								<Input width={100} required label="With a label"/><br/>
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
							<FormList>
								<Button color="green">Buttons</Button><span> </span>
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
					<GridItem size={50}>//TODO - Code sample - Validations - </GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = FormBox;

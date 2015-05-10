const React = require('react');
const NavigationBox = require("./NavigationBox");
const Button = require("./Lib/Button");
const LinkButton = require("./Lib/LinkButton");
const SubmitButton = require("./Lib/SubmitButton");
const Label = require("./Lib/Label");
const Badge = require("./Lib/Badge");
const Alert = require("./Lib/Alert");
const Message = require("./Lib/Message");

const Blocks = require("./Lib/Blocks");
const Block = require("./Lib/Block");

const Grid = require("./Lib/Grid");
const GridItem = require("./Lib/GridItem");

const Search = require("./Lib/Search");

const Form = require("./Lib/Form");
const FormList = require("./Lib/FormList");
const FormInput = require("./Lib/FormInput");
const FormSection = require("./Lib/FormSection");

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<NavigationBox />
				<Button color="blue" disabled active>Hello</Button>
				<LinkButton right color="red" outline active>Hello</LinkButton>
				<SubmitButton color="yellow">Hello</SubmitButton>
				<Label color="yellow"> New </Label>
				<br/>
				<Label color="red" outline>YEAH </Label><br/>
				<Badge small> 1 </Badge><br/>
				<Badge color="black"> 2</Badge><br/>
				<Alert remove> Hello this is an alert </Alert>
				<Alert color="blue"> This is a blue alert </Alert> 
				<Message color="red" position="relative"> ERROR! </Message>
				<Message color="green" show={true} top="100px"> Show Message! </Message>
				<br/>
				<Blocks amount={3}>
					<Block>Test</Block>
					<Block>Test</Block>
					<Block>Test</Block>
				</Blocks>

				<br/><br/><br/>
				<Grid>
					<GridItem size={60}> Hello</GridItem>
					<GridItem size={20} rounded><Search /> </GridItem>
					<GridItem size={20}><Search placeholder="search" button="go" /> </GridItem>

				</Grid>

				<br/><br/><br/><br/>
				<Form>
					<FormInput placeholder="type your email" width="40"/>
					<Button color="blue" width="40">Log in</Button>
					<FormSection name="test">
						<FormList inline>
						<ul>
						<li>
							<FormInput size={5} placeholder="type your email"/>
							</li>
						<li>
							<FormInput size={10} type="password" placeholder="type your password" width="100"/>
						</li>
						</ul>
						</FormList>

					</FormSection>
				</Form>
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);
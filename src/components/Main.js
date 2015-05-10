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
const Input = require("./Lib/Input");
const FormSection = require("./Lib/FormSection");

const Table = require("./Lib/Table");

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<NavigationBox />
				<Grid>
					<GridItem size={10}><br/></GridItem>
					<GridItem size={80}>

						<FormSection name="Get Started">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection> 

						<FormSection name="Typography">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection> 

						<FormSection name="Grid">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection> 

						<FormSection name="Blocks">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection> 

						<FormSection name="Tables">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Forms">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Navigation">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Buttons">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Labels">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Search">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Notifications">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Helpers">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>

						<FormSection name="Icons">
							<Grid>
								<GridItem size={50}>Preview here</GridItem>
								<GridItem size={50}>Code Here</GridItem>
							</Grid>
						</FormSection>
				
					</GridItem>
					<GridItem size={10}><br/></GridItem>
				</Grid>
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);
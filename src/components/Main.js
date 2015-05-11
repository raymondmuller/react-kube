const React = require('react');
const NavigationBox = require("./NavigationBox");
const Navigation = require("./Lib/Navigation");

const NavigationBar = require("./Lib/NavigationBar");
const NavigationItem = require("./Lib/NavigationItem");

const Label = require("./Lib/Label");
const Badge = require("./Lib/Badge");
const Alert = require("./Lib/Alert");

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

const Tabs = require("./Lib/Tabs");

const GetStarted = require("./GetStarted");
const CSSComponents = require("./CSSComponents");
const JSTools = require("./JSTools");




class Main extends React.Component {

	render() {
		return (
			<div className="main">
				<NavigationBox />

				<Grid>
					<GridItem size={10}><br/></GridItem>
					<GridItem size={80}>

    		<Tabs equals>
	        <NavigationItem url="#tab1">Get Started</NavigationItem>
					<NavigationItem url="#tab2">CSS Components</NavigationItem>
					<NavigationItem url="#tab3">JS Components</NavigationItem>
  			</Tabs>

 
  				<GetStarted />

					<CSSComponents />

					<JSTools />

						
					
					</GridItem>
					<GridItem size={10}><br/></GridItem>
				</Grid>
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);
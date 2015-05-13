const React = require("react");
const NavigationBox = require("./NavigationBox");
const NavigationItem = require("./lib/NavigationItem");
const Grid = require("./lib/Grid");
const GridItem = require("./lib/GridItem");
const Tabs = require("./lib/Tabs");
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
					<Tabs equals={false}>
						<NavigationItem url="#tab1">Get Started</NavigationItem>
						<NavigationItem url="#tab2">CSS Components</NavigationItem>
						<NavigationItem url="#tab3">JS Components</NavigationItem>
					</Tabs>
					<GetStarted />
					<CSSComponents />
					<JSTools />
					</GridItem>
					<GridItem size={10}>
						<br/>
					</GridItem>
				</Grid>
			</div>
		);
	}
}

module.exports = Main;

React.render(<Main />, document.body);  /*eslint-disable no-unused-vars*/

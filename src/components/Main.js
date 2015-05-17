const React = require("react");

const NavigationBox = require("./NavigationBox");
const Grid = require("./lib/Grid");
const GridItem = require("./lib/GridItem");
const Tabs = require("./lib/Tabs");
const Tab = require("./lib/Tab");
const GetStarted = require("./GetStarted");
const CSSComponents = require("./CSSComponents");
const JSTools = require("./JSTools");

class Main extends React.Component {

	render() {
		return (
			<div className="main">
				<NavigationBox />
				<section className="mainSection">
				<Grid>
					<GridItem size={10}><br/></GridItem>
					<GridItem size={80}>
					<Tabs equals={false}>
						<Tab id="#tab1" title="Get Started">
							<GetStarted />
						</Tab>
						<Tab id="#tab2" title="CSS Components">
							<CSSComponents />
						</Tab>
						<Tab id="#tab3" title="JS Components">
							<JSTools />
						</Tab>
					</Tabs>
					</GridItem>
					<GridItem size={10}>
						<br/>
					</GridItem>
				</Grid>
				</section>
			</div>
		);
	}
}

module.exports = Main;

React.render(<Main />, document.body);

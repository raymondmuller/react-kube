import React from "react";

import NavigationBox from "./NavigationBox";
import Grid from "./lib/Grid";
import GridItem from "./lib/GridItem";
import Tabs from "./lib/Tabs";
import Tab from "./lib/Tab";
import GetStarted from "./GetStarted";
import CSSComponents from "./CSSComponents";
import JSTools from "./JSTools";

class Main extends React.Component {

	componentWillMount() {
		if(location.hash){ // replace hashtag on first page load
			setTimeout(function(){
				location.hash = "";
				window.scrollTo(0, 0);
			}, 1);
		}
	}

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

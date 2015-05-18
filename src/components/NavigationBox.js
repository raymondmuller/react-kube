import React from "react";

import Navigation from "./lib/Navigation";
import NavigationBar from "./lib/NavigationBar";
import NavigationItem from "./lib/NavigationItem";
import NavigationLogo from "./lib/NavigationLogo";

class NavigationBox extends React.Component {

componentWillMount() {
	window.addEventListener("hashchange", function() { scrollBy(0, -115); }); // Dirty fix demo anchor scroll
}

componentWillUnmount(){
	window.removeEventListener("hashchange", function() { scrollBy(0, -115); }); // Dirty fix demo anchor scroll
}

render() {
	return (
		<header className="group" id="header" ref="header" style={this.props.style}>
			<Navigation responsive menuLabel="Menu" fixed active="01" id="nav" className="demo-navbar-fixed">
				<NavigationLogo id="logo">React-Kube (BETA)</NavigationLogo>
				<NavigationBar active={0} hideOnMobile left>
					<NavigationItem url="#documentation" icon="code"> Documentation </NavigationItem>
					<NavigationItem url="http://www.raymondmuller.com" icon="envelope"> Contact </NavigationItem>
					<NavigationItem url="http://www.github.com/raymondmuller" target="_new" icon="github"> Github</NavigationItem>
				</NavigationBar>
			</Navigation>
		</header>
		);
	}
}

module.exports = NavigationBox;

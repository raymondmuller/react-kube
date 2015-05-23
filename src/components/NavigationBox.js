import React from "react";

import Navigation from "./lib/Navigation";
import NavigationBar from "./lib/NavigationBar";
import NavigationItem from "./lib/NavigationItem";

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
			<Navigation active="01" className="demo-navbar-fixed" fixed id="nav" menuLabel="Menu" responsive >
				<NavigationItem id="logo">React-Kube (BETA)</NavigationItem>
				<NavigationBar active={0} hideOnMobile left>
					<NavigationItem icon="code" url="#documentation"> Documentation </NavigationItem>
					<NavigationItem icon="envelope" target="_new" url="http://www.raymondmuller.com"> Contact </NavigationItem>
					<NavigationItem icon="github" target="_new" url="http://www.github.com/raymondmuller/react-kube" > Github</NavigationItem>
				</NavigationBar>
			</Navigation>
		</header>
		);
	}
}

NavigationBox.propTypes = {
	style: React.PropTypes.object
};

module.exports = NavigationBox;

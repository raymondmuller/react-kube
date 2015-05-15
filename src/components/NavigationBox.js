const React = require("react");
const Navigation = require("./lib/Navigation");
const NavigationBar = require("./lib/NavigationBar");
const NavigationItem = require("./lib/NavigationItem");
const NavigationToggle = require("./lib/NavigationToggle");

class NavigationBox extends React.Component {

render() {
	return (
		<span>
			<NavigationToggle target="#navbar-1"> Menu </NavigationToggle>
			<Navigation id="#navbar-1" fullwidth toggle className="navCustom">
				<NavigationBar className="navigationBarCustom" left>
					<NavigationItem url="#" icon="home"> React-Kube (WIP) </NavigationItem>
					<NavigationItem url="#documentation" icon="code"> Documentation </NavigationItem>
					<NavigationItem url="http://www.raymondmuller.com" icon="envelope"> Contact </NavigationItem>
					<NavigationItem url="http://www.github.com/raymondmuller" target="_new" icon="github"> Github</NavigationItem>
				</NavigationBar>
			</Navigation>
		</span>
		);
	}
}

module.exports = NavigationBox;

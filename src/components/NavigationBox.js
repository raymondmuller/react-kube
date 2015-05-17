const React = require("react");
const Navigation = require("./lib/Navigation");
const NavigationBar = require("./lib/NavigationBar");
const NavigationItem = require("./lib/NavigationItem");
const NavigationLogo = require("./lib/NavigationLogo");

class NavigationBox extends React.Component {

render() {
	return (
		<header className="group" id="header" style={this.props.style}>
			<Navigation responsive menuLabel="Menu" fixed active="01" id="nav" className="demo-navbar-fixed">
				<NavigationLogo>React-Kube (BETA)</NavigationLogo>
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

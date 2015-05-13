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
			<Navigation id="#navbar-1" toggle className="navCustom">
				<NavigationBar className="navigationBarCustom" left>
					<NavigationItem url="#" icon="home"> React-Kube (WIP) </NavigationItem>
					<NavigationItem url="#documentation" icon="code"> Documentation </NavigationItem>
					<NavigationItem url="http://www.raymondmuller.com" icon="envelope"> Contact </NavigationItem>
					<NavigationItem url="http://www.github.com/raymondmuller" target="_new" icon="github"> Github</NavigationItem>
				</NavigationBar>
				<NavigationBar className="hide-on-mobile" right>
					<form action="" className="right width-70">
							<input type="text" className="input-search input-search-icon width-100" placeholder="not working yet" />
						</form>
				</NavigationBar>
			</Navigation>
		</span>
		);
	}
}

module.exports = NavigationBox;

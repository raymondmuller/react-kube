const React = require("react");
const Navigation = require("./Lib/Navigation");
const NavigationBar = require("./Lib/NavigationBar");
const NavigationItem = require("./Lib/NavigationItem");

class NavigationBox extends React.Component {

	render() {

		return (
			<Navigation className="navCustom">
				<NavigationBar className="navigationBarCustom" left>
					<NavigationItem url="#" icon="home"> React-Kube (WIP) </NavigationItem>
					<NavigationItem url="#documentation" icon="code"> Documentation </NavigationItem>
					<NavigationItem url="http://www.raymondmuller.com" icon="envelope"> Contact </NavigationItem>
					<NavigationItem url="http://www.github.com/raymondmuller" target="_new" icon="github"> Github</NavigationItem>
				</NavigationBar>
				<NavigationBar right>
					<form action="" className="right width-70">
				        <input type="text" className="input-search input-search-icon width-100" placeholder="Search" />
				    </form>
				</NavigationBar>
			</Navigation>
		)
	}

}

module.exports = NavigationBox;
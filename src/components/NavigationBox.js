const React = require("react");
var Navigation = require("./Lib/Navigation");
var NavigationBar = require("./Lib/NavigationBar");
var NavigationItem = require("./Lib/NavigationItem");

class NavigationBox extends React.Component {

	render() {

		return(
			<Navigation>
				<NavigationBar left>
					<NavigationItem url="#" icon="home"> Home </NavigationItem>
					<NavigationItem url="#about" icon="file"> About </NavigationItem>
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
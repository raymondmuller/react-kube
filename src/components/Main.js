const React = require('react');
var NavigationBar = require("./Lib/NavigationBar");
var NavigationItem = require("./Lib/NavigationItem");


class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<NavigationBar fullwidth pills> 
					<NavigationItem url=""> Home </NavigationItem>
					<NavigationItem url="#about"> About </NavigationItem>
					<NavigationItem url="#documentation"> Documentation </NavigationItem>
					<NavigationItem url="#contact"> Contact </NavigationItem>
					<NavigationItem url="#exit"> Exit </NavigationItem>
				</NavigationBar>
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);
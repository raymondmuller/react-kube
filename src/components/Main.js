const React = require('react');
const NavigationBox = require("./NavigationBox");
const Button = require("./Lib/Button");


class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<NavigationBox />
				<Button>Hello</Button>
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);
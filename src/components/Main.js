const React = require('react');
const NavigationBox = require("./NavigationBox");


class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<NavigationBox />
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);
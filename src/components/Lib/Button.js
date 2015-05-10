const React = require("react");
var classNames = require("classnames");
var styles;

class Button extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: "0-0" }
	}
	componentWillMount() {
		styles = classNames({
			"btn": true,
		})
	}

	
	render() {
		return (
			<button className={styles}>{this.props.children} </button>
		)
	}

}

module.exports = Button;
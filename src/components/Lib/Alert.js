const React = require("react");
var classNames = require("classnames");
var styles;

class Alert extends React.Component {

	componentWillMount() {
		styles = classNames({
			"tools-alert": true
		})

		if(this.props.color) {
			styles += " " + "tools-alert-" + this.props.color
		}
	}
	
	render() {
		return (
			<div className={styles}>{this.props.children}</div>
		)
	}

}

module.exports = Alert;
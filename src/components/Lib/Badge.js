const React = require("react");
var classNames = require("classnames");
var styles;

class Badge extends React.Component {

	componentWillMount() {
		styles = classNames({
			"badge": true,
			"badge-small": this.props.small
		})

		if(this.props.color) {
			styles += " " + "badge-" + this.props.color
		}
	}
	
	render() {
		return (
			<span className={classNames(this.props.className, styles)}>{this.props.children}</span>
		)
	}

}

module.exports = Badge;
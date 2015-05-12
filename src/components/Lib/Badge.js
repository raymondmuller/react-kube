const React = require("react");
const classNames = require("classnames");

class Badge extends React.Component {

	render() {
		let styles = classNames({
			"badge": true,
			"badge-small": this.props.small
		});

		styles += this.props.color ? " badge-" + this.props.color : null;
		return (
			<span className={classNames(this.props.className, styles)}>{this.props.children}</span>
		);
	}
}

module.exports = Badge;

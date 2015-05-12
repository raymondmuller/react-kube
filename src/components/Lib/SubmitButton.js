const React = require("react");
const classNames = require("classnames");

class SubmitButton extends React.Component {
	render() {
		let styles = classNames({
			"btn": true,
			"left": this.props.left,
			"right": this.props.right,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		});

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color;
		}
		if(this.props.width) {
			styles += " " + "width-" + this.props.width;
		}
		return (
			<input type="submit" value={this.props.children} className={classNames(this.props.className, styles)} />
		);
	}
}

module.exports = SubmitButton;

const React = require("react");
var classNames = require("classnames");
var styles;

class SubmitButton extends React.Component {

	componentWillMount() {
		styles = classNames({
			"btn": true,
			"left": this.props.left,
			"right": this.props.right,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		})

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color
		}
		if(this.props.width) {
			styles += " " + "width-" + this.props.width;
		}
	}
	
	render() {
		return (
			<input type="submit" value={this.props.children} className={classNames(this.props.className, styles)} />
		)
	}

}

module.exports = SubmitButton;
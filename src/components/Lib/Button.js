const React = require("react");
var classNames = require("classnames");

class Button extends React.Component {

	render() {
		let styles = classNames({
			"btn": true,
			"left": this.props.left,
			"right": this.props.right,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		});

		styles += this.props.color ? " btn-" + this.props.color : null;
		styles += this.props.width ? " width-" + this.props.width : null;

		let iconStyles = this.props.icon ? "fa fa-" + this.props.icon : null;
		return (
			<button onClick={this.props.onClick} className={classNames(this.props.className, styles)}>
				{this.props.icon ? <li className={iconStyles}></li> : null }
				{this.props.children}
			</button>
		);
	}
}

module.exports = Button;

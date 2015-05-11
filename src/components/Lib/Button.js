const React = require("react");
var classNames = require("classnames");
var styles;
var iconStyles;

class Button extends React.Component {

	componentWillMount() {
		styles = classNames({
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
	}
	
	render() {
		let SPACE = " "
		this.props.icon ? iconStyles = "fa " + "fa-" + this.props.icon : null
		return (
			<button onClick={this.props.onClick} className={classNames(this.props.className, styles)}>
				{this.props.icon ? <li className={iconStyles}></li>: null }
				{this.props.children}
			</button>
		)
	}

}

module.exports = Button;
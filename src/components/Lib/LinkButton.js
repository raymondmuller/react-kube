const React = require("react");
var classNames = require("classnames");
var styles;

class LinkButton extends React.Component {

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
			<a href={this.props.url} target={this.props.target ? this.props.target : "_self"} className={styles}>{this.props.children} </a>
		)
	}

}

module.exports = LinkButton;
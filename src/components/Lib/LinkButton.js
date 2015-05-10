const React = require("react");
var classNames = require("classnames");
var styles;

class LinkButton extends React.Component {

	componentWillMount() {
		styles = classNames({
			"btn": true,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		})

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color
		}
	}
	
	render() {
		return (
			<a href={this.props.url} target={this.props.target ? this.props.target : "_self"} className={styles}>{this.props.children} </a>
		)
	}

}

module.exports = LinkButton;
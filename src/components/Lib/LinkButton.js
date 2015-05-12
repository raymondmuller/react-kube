const React = require("react");
const classNames = require("classnames");

class LinkButton extends React.Component {
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
			<a href={this.props.url} target={this.props.target ? this.props.target : "_self"} className={classNames(this.props.className, styles)}>
				{this.props.children}
			</a>
		);
	}
}

module.exports = LinkButton;

const React = require("react");
const classNames = require("classnames");

class GridItem extends React.Component {

	render() {
		let styles = classNames({
			"unit-centered": this.props.centered,
			"unit-push-right": this.props.right,
			"end": this.props.margin,
			"units-split": this.props.disabled
		});
		if(this.props.size) {
			styles += " unit-" + this.props.size;
		}
		if(this.props.push) {
			styles += " unit-push-" + this.props.push;
		}
		return (
			<div className={classNames(this.props.className, styles)}>{this.props.children}</div>
		);
	}
}

module.exports = GridItem;

const React = require("react");
const classNames = require("classnames");

class Grid extends React.Component {
	render() {
		let styles = classNames({
			"units-row": true,
			"units-padding": this.props.padding,
			"units-split": this.props.disabled,
			"end": this.props.end
		});
		if(this.props.mobile) {
			styles += " units-mobile-" + this.props.mobile;
		}
		return (
				<div className={classNames(this.props.className, styles)}>{this.props.children}</div>
		);
	}
}
module.exports = Grid;

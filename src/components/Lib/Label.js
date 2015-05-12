const React = require("react");
const classNames = require("classnames");

class Label extends React.Component {
	render() {
		let styles = classNames({
			"label": true,
			"label-outline": this.props.outline
		});

		if(this.props.color) {
			styles += " " + "label-" + this.props.color;
		}
		return (
			<span className={classNames(this.props.className, styles)}>
				{this.props.children}
			</span>
		);
	}
}

module.exports = Label;

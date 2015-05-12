const React = require("react");
const classNames = require("classnames");

class Blocks extends React.Component {

	render() {
		let styles = "blocks-" + this.props.amount;
		styles += this.props.mobile ? " blocks-mobile-" + this.props.mobile : null;
		return (
			<ul className={classNames(this.props.className, styles)}>
				{this.props.children}
			</ul>
		);
	}
}

// amount should be required
module.exports = Blocks;

const React = require("react");

class TableItem extends React.Component {

	render() {
		return (
			<td className={this.props.className}>
			{this.props.children}
			</td>
		);
	}
}

module.exports = TableItem;

const React = require("react");

class TableRow extends React.Component {

	render() {
		return (
			<tbody className={this.props.className} style={this.props.style}>
				<tr>
					{this.props.children}
			</tr>
			</tbody>
		);
	}
}

TableRow.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = TableRow;

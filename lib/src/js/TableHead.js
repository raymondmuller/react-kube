const React = require("react");

class TableHead extends React.Component {

	render() {
		return (
			<th className={this.props.className}>
				{this.props.children}
			</th>
		);
	}
}

TableHead.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string
};

module.exports = TableHead;

const React = require("react");

class TableHead extends React.Component {

	render() {
		return (
			<th className={this.props.className} style={this.props.style}>
				{this.props.children}
			</th>
		);
	}
}

TableHead.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = TableHead;

const React = require("react");

class TableHeader extends React.Component {

	render() {
		return (
			<thead className={this.props.className} style={this.props.style}>
				<tr>
					{this.props.children}
				</tr>
			</thead>
		);
	}
}

TableHeader.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = TableHeader;

const React = require("react");

class TableHeader extends React.Component {

	render() {
		return (
			<thead className={this.props.className}>
				<tr>
					{this.props.children}
				</tr>
			</thead>
		);
	}
}

TableHeader.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string
};

module.exports = TableHeader;

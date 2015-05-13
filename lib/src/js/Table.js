const React = require("react");
const classNames = require("classnames");

class Table extends React.Component {
	render() {
		let styles = {
			"table-bordered": this.props.bordered,
			"table-simple": this.props.simple,
			"table-flat": this.props.flat,
			"table-stripped": this.props.stripped,
			"table-hovered": this.props.hovered
		};
		let table =
			<table className={classNames(this.props.className, styles)}>
				{this.props.children}
			</table>;
		return (
			<div>
				{ this.props.responsive ?
				<div className="table-container">
					{table}
				</div>
			: {table} }
			</div>
		);
	}
}

Table.propTypes = {
	bordered: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	flat: React.PropTypes.bool,
	hovered: React.PropTypes.bool,
	responsive: React.PropTypes.bool,
	simple: React.PropTypes.bool,
	stripped: React.PropTypes.bool
};

module.exports = Table;

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
		let table = <table className={classNames(this.props.className, styles)}>
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

module.exports = Table;

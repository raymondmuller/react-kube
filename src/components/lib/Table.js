import React from "react";
import classNames from "classnames";

class Table extends React.Component {
	render() {
		let styles = {
			"table-bordered": this.props.type === "bordered",
			"table-flat": this.props.type === "flat",
			"table-hovered": this.props.type === "hovered",
			"table-simple": this.props.type === "simple",
			"table-stripped": this.props.type === "stripped"
		};
		let table =
			<table className={classNames(this.props.className, styles)} frame={this.props.frame} style={this.props.style}>
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
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	frame: React.PropTypes.string,
	responsive: React.PropTypes.bool,
	style: React.PropTypes.object,
	type: React.PropTypes.oneOf(["bordered", "flat", "hovered", "simple", "stripped"])
};

Table.defaultProps = { responsive: false };

module.exports = Table;

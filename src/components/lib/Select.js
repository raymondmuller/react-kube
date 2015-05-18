import React from "react";
import classNames from "classnames";

class Select extends React.Component {

	render() {
		let styles = this.props.width ? "width-" + this.props.width : "";

		return (
			<select className={classNames(this.props.className, styles)} disabled={this.props.disabled} id={this.props.id} multiple={this.props.multiple} name={this.props.name} onChange={this.props.onChange} size={this.props.size} >
				{this.props.children}
				{this.props.description ? <div className="forms-desc">{this.props.description}</div> : null }
			</select>
		);
	}
}

Select.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	description: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	id: React.PropTypes.string,
	multiple: React.PropTypes.bool,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	size: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]),
	width: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

module.exports = Select;

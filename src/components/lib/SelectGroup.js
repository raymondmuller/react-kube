import React from "react";

class SelectGroup extends React.Component {

	render() {
		return (
			<optgroup className={this.props.className} label={this.props.label}>
				{this.props.children}
			</optgroup>
		);
	}
}

SelectGroup.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	label: React.PropTypes.string
};

module.exports = SelectGroup;

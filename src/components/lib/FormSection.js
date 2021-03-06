import React from "react";

class FormSection extends React.Component {
	render() {
		return (
			<fieldset className={this.props.className} id={this.props.id} name={this.name} style={this.props.style}>
				<legend>{this.props.name}</legend>
				{this.props.children}
			</fieldset>
		);
	}
}

FormSection.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	name: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = FormSection;

const React = require("react");

class FormSection extends React.Component {
	render() {
		return (
			<fieldset className={this.props.className}>
				<legend>{this.props.name}</legend>
				{this.props.children}
			</fieldset>
		);
	}
}

module.exports = FormSection;

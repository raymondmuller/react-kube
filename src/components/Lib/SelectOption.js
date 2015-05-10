const React = require("react");

class SelectOption extends React.Component {

	render() {
		return (
         	<option value={this.value}>{this.props.children}</option>
		)
	}
}

module.exports = SelectOption;
const React = require("react");

class RadioButton extends React.Component {
	render() {
		return (
			<li>
				<input type="radio" className={this.props.className} name={this.props.id} id={this.props.id} disabled={this.props.disabled} />
				<label for={this.props.id}>{this.props.children}</label>
			</li>
		);
	}
}

module.exports = RadioButton;


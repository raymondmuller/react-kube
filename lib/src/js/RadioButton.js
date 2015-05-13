const React = require("react");

class RadioButton extends React.Component {
	render() {
		return (
			<li>
				<input className={this.props.className} disabled={this.props.disabled} id={this.props.id} name={this.props.id} style={this.props.style} type="radio" />
				<label htmlFor={this.props.id}>
					{this.props.children}
				</label>
			</li>
		);
	}
}

RadioButton.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	id: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = RadioButton;


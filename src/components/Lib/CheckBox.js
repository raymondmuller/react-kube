const React = require("react");

class CheckBox extends React.Component {

	render() {
		return (
			<li>
				<input className={this.props.className} type="checkbox" name={this.props.id} id={this.props.id} disabled={this.props.disabled} />
				<label for={this.props.id}>{this.props.children}</label>
			</li>
		);
	}
}

CheckBox.propTypes = {disabled: React.PropTypes.bool };

CheckBox.defaultProps = {disabled: false};

module.exports = CheckBox;


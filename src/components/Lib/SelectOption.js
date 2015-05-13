const React = require("react");

class SelectOption extends React.Component {

	render() {
		return (
			<option className={this.props.className} style={this.props.style} value={this.props.value}>
				{this.props.children}
			</option>
		);
	}
}

SelectOption.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object,
	value: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number, React.PropTypes.bool])
};

module.exports = SelectOption;

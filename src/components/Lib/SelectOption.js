const React = require("react");

class SelectOption extends React.Component {

	render() {
		return (
			<option className={this.props.className} value={this.value}>
				{this.props.children}
			</option>
		);
	}
}

SelectOption.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string
};

module.exports = SelectOption;

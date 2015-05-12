const React = require("react");

class SelectGroup extends React.Component {
	render() {
		return ( <optgroup className={this.props.className} label={this.props.label}>
			{this.props.children}
		</optgroup>
		);
	}
}

module.exports = SelectGroup;


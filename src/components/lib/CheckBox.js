import React from "react";

class CheckBox extends React.Component {

	render() {
		return (
			<li>
				<input className={this.props.className} disabled={this.props.disabled} id={this.props.id} name={this.props.id} style={this.props.style} type="checkbox" />
				<label htmlFor={this.props.id}>{this.props.children}</label>
			</li>
		);
	}
}

CheckBox.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	id: React.PropTypes.string,
	style: React.PropTypes.object
};

CheckBox.defaultProps = {disabled: false};

module.exports = CheckBox;


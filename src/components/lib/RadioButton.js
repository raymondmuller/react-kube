import React from "react";

class RadioButton extends React.Component {

	handleChange(e){
		this.props.onChange ? this.props.onChange(e.target.value) : null; //eslint-disable-line
	}

	render() {
		return (
			<span>
				<input className={this.props.className} defaultChecked={this.props.checked} disabled={this.props.disabled} id={this.props.id ? this.props.id : this.props.name} name={this.props.name} onChange={this.handleChange.bind(this)} style={this.props.style} type="radio" value={this.props.value} />
				<label htmlFor={this.props.id}>
					{this.props.children}
				</label>
				{!this.props.inline ? <br/> : null}
			</span>
		);
	}
}

RadioButton.propTypes = {
	checked: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	id: React.PropTypes.string,
	inline: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired,
	style: React.PropTypes.object,
	value: React.PropTypes.string.isRequired
};

module.exports = RadioButton;


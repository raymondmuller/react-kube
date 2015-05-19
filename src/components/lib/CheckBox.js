import React from "react";

class CheckBox extends React.Component {
	constructor(props){
		super(props);
		this.state = { checked: this.props.checked };
	}

	handleToggle() {
		let currentValue = this.state.checked;
		this.setState({
			checked: !currentValue
		});
	}

	handleChange(e) {
		this.props.onChange ? this.props.onChange(e.target.checked, e.target.value) : null; //eslint-disable-line
	}

	render() {
		return (
			<li>
				<input className={this.props.className} defaultChecked={this.state.checked} disabled={this.props.disabled} id={this.props.id} name={this.props.id} onChange={this.handleChange.bind(this)} onClick={this.handleToggle.bind(this)} style={this.props.style} type="checkbox" value={this.props.value} />
				<label htmlFor={this.props.id}>{this.props.children}</label>
			</li>
		);
	}
}

CheckBox.propTypes = {
	checked: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	id: React.PropTypes.string,
	onChange: React.PropTypes.func,
	style: React.PropTypes.object,
	value: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

CheckBox.defaultProps = {checked: false, disabled: false};

module.exports = CheckBox;


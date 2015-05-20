import React from "react";

class CheckBox extends React.Component {
	constructor(props){
		super(props);
		this.state = { checked: this.props.checked };
	}

	handleToggle(e) {
		this.setState({
			checked: e.target.checked
		});
		this.props.onChange ? this.props.onChange(e.target.checked, e.target.value) : null; //eslint-disable-line
	}

	componentWillReceiveProps(nextProps){
		if("checked" in nextProps && nextProps.checked !== this.state.checked){
			this.setState({
				checked: nextProps.checked
			});
		}
	}

	render() {
		return (
			<span>
				<input className={this.props.className} checked={this.state.checked} defaultChecked={this.props.checked} disabled={this.props.disabled} id={this.props.id} name={this.props.id} onChange={this.handleToggle.bind(this)} ref={this.props.id} style={this.props.style} type="checkbox" value={this.props.value} />
				<label className={this.props.labelClassName} htmlFor={this.props.id}>{this.props.children}</label>
				{!this.props.inline ? <br/> : null}
			</span>
		);
	}
}

CheckBox.propTypes = {
	checked: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	id: React.PropTypes.string.isRequired,
	inline: React.PropTypes.bool,
	labelClassName: React.PropTypes.string,
	onChange: React.PropTypes.func,
	style: React.PropTypes.object,
	value: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]).isRequired
};

CheckBox.defaultProps = {checked: false, disabled: false};

module.exports = CheckBox;


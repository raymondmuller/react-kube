import React from "react";
import CheckBox from "./CheckBox";
import classNames from "classnames";

class CheckAll extends React.Component {
	constructor(props){
		super(props);
		this.state = { all: false, checked: null };
	}

	componentWillMount() {
		this.setState({
			checked: this.props.children.map((child) => {
				return {
					checked: child.props.checked ? child.props.checked : false
				};
			})
		});
}

	handleSingleCheck(index, value){
		if(!value){ this.setState({ all: value }); }

		let currentState = this.state.checked;
		currentState[index].checked = value;
		this.setState({
			checked: currentState
		});
	}

	handleChange(value) {
		this.setState({
			all: !this.state.all,
			checked: this.props.children.map(() => {
				return {
					checked: value
				};
			})
		});
		this.props.onChange ? this.props.onChange(value) : null; //eslint-disable-line
}

	render() {
		let children = [];
		React.Children.forEach(this.props.children, (child, i) => {
			let childrenClasses = classNames({
				highlight: this.state.checked[i].checked && this.props.highlight
			});
			child.props.checked = "true";
			children.push(React.cloneElement(child, {checked: this.state.checked[i].checked, inline: this.props.inline, key: i, labelClassName: classNames(this.props.className, childrenClasses), onChange: this.handleSingleCheck.bind(this, i) }));
		});

		let checkAllBox =
			<CheckBox checked={this.state.all} className={this.props.className} disabled={this.props.disabled} id="all" inline={this.props.inline} onChange={this.handleChange.bind(this)} ref="checkAll" value={this.props.value}>
						{this.props.label2 ? (this.state.all ? this.props.label2 : this.props.label) : this.props.label}
			</CheckBox>;

		return (
			<span>
				{ !this.props.bottom ? {checkAllBox} : null }
					{children}
				{ this.props.bottom ? {checkAllBox} : null}
			</span>
		);
	}
}

CheckAll.propTypes = {
	bottom: React.PropTypes.bool,
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	highlight: React.PropTypes.bool,
	id: React.PropTypes.string,
	inline: React.PropTypes.bool,
	label: React.PropTypes.string,
	label2: React.PropTypes.string,
	onChange: React.PropTypes.func,
	style: React.PropTypes.object,
	value: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

CheckAll.defaultProps = {bottom: false, checked: false, disabled: false, value: "all"};

module.exports = CheckAll;


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
			children.push(React.cloneElement(child, {checked: this.state.checked[i].checked, labelClassName: classNames(this.props.className, childrenClasses), onChange: this.handleSingleCheck.bind(this, i) }));
		});

		return (
			<span>
				<CheckBox checked={this.state.all} disabled={this.props.disabled} id="all" onChange={this.handleChange.bind(this)} ref="checkAll">
					{this.props.label2 ? (this.state.all ? this.props.label2 : this.props.label) : this.props.label}
				</CheckBox>
				{children}
			</span>
		);
	}
}

CheckAll.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	highlight: React.PropTypes.bool,
	id: React.PropTypes.string,
	label: React.PropTypes.string,
	label2: React.PropTypes.string,
	onChange: React.PropTypes.func,
	style: React.PropTypes.object,
	value: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

CheckAll.defaultProps = {checked: false, disabled: false};

module.exports = CheckAll;


import React from "react";
import classNames from "classnames";

class ToggleButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: this.props.active, value: this.props.segmented ? [] : this.props.active};
	}

	componentWillMount() {
		if(this.props.single){this.setState({value: "0"}); }
	}

	handleItemClick(value) {
		if(this.props.segmented) {
			let arr = this.state.value;
			if(arr.indexOf(value) !== -1){
				arr.splice(arr.indexOf(value), 1);
			} else {
				arr.push(value);
			}
			this.setState({
				value: arr
			});
			value = this.state.value;
		} else if(this.props.single){
			let currentValue = this.state.value;
			this.setState({
				active: currentValue === "0" ? "1" : "0",
				value: currentValue === "0" ? "1" : "0"
			});
			value = this.state.value;
		} else {
			this.setState({
				active: value,
				value: value
			});
		}
		this.props.onToggle ? this.props.onToggle(value) : console.error("prop: fn => \"onToggle\" is required"); //eslint-disable-line
	}

	render() {
		let styles = classNames({
			"btn-group": true
		});

		let children = [];

		React.Children.forEach(this.props.children, (child, i) => {
			child.props.value !== null ? null : console.error("At least one of your toggle buttons is missing a value"); //eslint-disable-line
			children.push(React.cloneElement(child, {
				active: this.state.active === child.props.value,
				color: child.props.color,
				key: i,
				index: i,
				onClick: this.handleItemClick.bind(this, child.props.value),
				value: this.props.single ? this.state.value : child.props.value})
			);
		});

		return (
				<p className={classNames(this.props.className, styles)}>
					{children}
				</p>
		);
	}
}

ToggleButtons.propTypes = {
	active: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	onToggle: React.PropTypes.func.isRequired,
	segmented: React.PropTypes.bool,
	single: React.PropTypes.bool
};

ToggleButtons.defaultProps = { active: "" };

module.exports = ToggleButtons;

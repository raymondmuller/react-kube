import React from "react";
import classNames from "classnames";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}

	componentDidMount() {
		let dropdownHeight = React.findDOMNode(this.refs.dropdownOwner).offsetHeight;
		let posTop = React.findDOMNode(this.refs.dropdownOwner).offsetTop + dropdownHeight;
		let posLeft = React.findDOMNode(this.refs.dropdownOwner).offsetLeft;

		this.setState({
			left: posLeft,
			top: posTop
		});

		//mousedown listener, used to detect clicks outside of the dropdown
		window.addEventListener("mousedown", this.closeDropDown.bind(this));
	}

	componentWillUnmount() {
		//mousedown click listener
		window.removeEventListener("mousedown", this.closeDropDown.bind(this));
	}

	toggleDropDown() {
		let shown = this.state.show;
		this.setState({
			show: !shown
		});
	}

	closeDropDown() {
		if(!this.mouseOnDropdown){
			this.setState({
				show: false
			});
		}
	}

	handleMouseDown() {
		this.mouseOnDropdown = true;
	}

	handleMouseUp() {
		this.mouseOnDropdown = false;
	}

	selectItem(item) {
		// sub navigation click callback
		this.props.onClick ? this.props.onClick(item) : null;
		// on select function
		this.props.onSelect ? this.props.onSelect(item) : null; //eslint-disable-line
		// hide dropdown on select
		this.setState({
			show: false
		});
	}

	render() {
		let dropdownClasses = classNames({
			"dropdown": true
		});

		let dropdownStyle = {
			background: this.props.background,
			color: this.props.color ? this.props.color : "inherit",
			cursor: "pointer",
			display: "block !important",
			left: this.state.left,
			top: this.state.top + this.props.top,
			visibility: this.state.show ? "visible" : "hidden",
			zIndex: 100
		};

		let wrapperStyle = {
			cursor: "pointer",
			position: "relative"
		};


		let items = this.props.data.map((item, i) => {
				return (
					<li key={i}
					onClick={this.selectItem.bind(this, item)}
					style={item.props ? item.props.style : null}>
						<a href={item.props ? item.props.url : null}
							target={item.props ? item.props.target : null}>
							{item}
						</a>
					</li>
			);
		});

		let children = React.Children.map(this.props.children, function(child, i) {
			return (React.cloneElement(child, {key: i, onClick: this.toggleDropDown.bind(this), ref: "dropdownOwner", style: {cursor: "pointer"} }));
		}, this);

		return (
			<div onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} ref="dropDownOwner" style={wrapperStyle}>
					{children}
				<ul className={classNames(this.props.className, dropdownClasses)} ref="dropdown" style={dropdownStyle}>
					{items}
				</ul>
			</div>
		);
	}
}

Dropdown.propTypes = {
	background: React.PropTypes.string,
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	data: React.PropTypes.array.isRequired,
	onSelect: React.PropTypes.func,
	style: React.PropTypes.object,
	top: React.PropTypes.number
};

module.exports = Dropdown;

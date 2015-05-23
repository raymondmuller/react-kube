import React from "react/addons";
import classNames from "classnames";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}

	componentDidMount() {
		let element = React.findDOMNode(this.refs.dropdownOwner);
		let dropdownHeight = element.offsetHeight;
		let posTop = element.offsetTop + dropdownHeight;
		let posLeft = element.offsetLeft;

		this.setState({
			left: posLeft,
			top: posTop
		});

		let listStyle = {
			background: this.props.background,
			color: this.props.color ? this.props.color : "inherit",
			cursor: "pointer",
			display: "block !important",
			left: posLeft,
			top: posTop + (this.props.top ? this.props.top : 0),
			zIndex: 100
		};

		this.dropdownStyle = React.addons.update(this.props.style, {$merge: listStyle});

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
		this.props.onClick ? this.props.onClick(item) : null; //eslint-disable-line
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
			<div onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} style={wrapperStyle}>
					{children}
				{this.state.show ? <ul className={classNames(this.props.className, dropdownClasses)} ref="dropdown" style={this.dropdownStyle}>
					{items}
				</ul> : null}
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
	onClick: React.PropTypes.func,
	onSelect: React.PropTypes.func,
	style: React.PropTypes.object,
	top: React.PropTypes.number
};

Dropdown.defaultProps = { style: {} };

module.exports = Dropdown;

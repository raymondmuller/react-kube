const React = require("react");
const classNames = require("classnames");

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
		// on select function
		if("onSelect" in this.props) { this.props.onSelect(item); }
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
			cursor: "pointer",
			display: "block !important",
			left: this.state.left,
			top: this.state.top,
			visibility: this.state.show ? "visible" : "hidden",
			zIndex: 100
		};

		let wrapperStyle = {
			position: "relative"
		};

		let childStyle = {
			cursor: "pointer"
		};

		let items = this.props.data.map((item) => {
				return <li onClick={this.selectItem.bind(this, item)}><a>{item}</a></li>;
		});

		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: i === this.state.active, index: i, onClick: this.toggleDropDown.bind(this), ref: "dropdownOwner"});
		}, this);

		return (
			<div onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} style={wrapperStyle}>
				<span style={childStyle}>
					{children}
				</span>
				<ul className={classNames(this.props.className, dropdownClasses)} ref="dropdown" style={dropdownStyle}>
					{items}
				</ul>
			</div>
		);
	}
}

Dropdown.propTypes = {
	children: React.PropTypes.element.isRequired,
	className: React.PropTypes.string,
	data: React.PropTypes.array,
	onSelect: React.PropTypes.func,
	style: React.PropTypes.object
};

Dropdown.defaultProps = { placement: "bottom"};

module.exports = Dropdown;

const React = require("react");
const classNames = require("classnames");

class Filterbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: this.props.show };
	}

	componentDidMount() {

		let togglePosTop = React.findDOMNode(this.refs.filterInput).offsetTop + React.findDOMNode(this.refs.filterInput).offsetHeight / 2;
		let togglePosLeft = React.findDOMNode(this.refs.filterInput).offsetLeft + React.findDOMNode(this.refs.filterInput).offsetWidth - 25;

		this.setState({
			togglePos: {left: togglePosLeft, top: togglePosTop}
		});

		//Calculate width of the input field to equal the suggestions lists width
		this.inputWidth = React.findDOMNode(this.refs.filterInput).offsetWidth;

		//mousedown listener, used to detect clicks outside of the dropdown
		window.addEventListener("mousedown", this.closeFilterbox.bind(this));
	}

	componentWillUnmount() {
		//mousedown click listener
		window.removeEventListener("mousedown", this.closeFilterbox.bind(this));
	}

	closeFilterbox(){
		if(!this.mouseOnFilterbox){
			this.setState({
				show: false
			});
		}
	}

	toggleFilterbox() {
		let shown = this.state.show;
		this.setState({
			show: !shown
		});
	}

	handleMouseDown() {
		this.mouseOnFilterbox = true;
	}

	handleMouseUp() {
		this.mouseOnFilterbox = false;
	}

	handleChange(e) {
		// update input value
		this.setState({
			value: e.target.value
		});
		// when available, execute the onChange function of the parent
		this.props.onChange ? this.props.onChange(e.target.value) : null;
	}

	handleSelectItem(item) {
		// set value and hide filterbox
		this.setState({
			show: false,
			value: item
		});
		// when available, execute the onChange function of the parent
		this.props.onChange ? this.props.onChange(item) : null;
	}

	render() {

		let filterClasses = classNames({
			"filterbox": true
		});

		let toggleClasses = {
			"filterbox-toggle": true
		};

		let toggleStyle = {
			left: this.state.togglePos ? this.state.togglePos.left : 0,
			top: this.state.togglePos ? this.state.togglePos.top : 0
		};

		let listClasses = classNames({
			"filterbox-list": true
		});

		let listStyle = {
			display: this.state.show ? "block" : "none",
			width: this.inputWidth
		};

		let listItems = this.props.data.map((item, index) => {
			return <li onClick={this.handleSelectItem.bind(this, item)}>{item}</li>;
		});

		return (
			<div className={classNames(this.props.className, filterClasses)} onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} style={this.props.style}>
				<input className={this.props.inputClassName} id={this.props.id} onChange={this.handleChange.bind(this)} placeholder={this.props.placeholder} ref="filterInput" required={this.props.required} type="text" value={this.state.value}/>
				<span className={classNames(this.props.toggleClassName, toggleClasses)} onClick={this.toggleFilterbox.bind(this)} ref="filterToggle" style={toggleStyle}></span>
				<ul className={classNames(this.props.listClassName, listClasses)} style={listStyle}>
					{listItems}
				</ul>
			</div>
		);
	}
}

Filterbox.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	data: React.PropTypes.array.isRequired,
	onChange: React.PropTypes.func,
	show: React.PropTypes.bool,
	style: React.PropTypes.object
};

Filterbox.defaultProps = { show: false };

module.exports = Filterbox;

const React = require("react");
var classNames = require("classnames");

class Alert extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showAlert: true };
	}

	handleClick() {
		if(this.props.remove) {
			this.setState({ showAlert: false });
		}
	}

	render() {
		let wrapperStyle = {
			position: "relative"
		};

		let iconStyle = {
		  position: "absolute",
		  top: "-2px",
		  right: "6px",
		  cursor: "pointer"
		};

		let styles = classNames({
			"tools-alert": true,
		})

		if(this.props.color) {
			styles += " " + "tools-alert-" + this.props.color
		}

		return (
			<div>{this.state.showAlert ? 
			<div style={wrapperStyle}>
				<div className={classNames(this.props.className, styles)}>{this.props.children}</div>
				{this.props.remove ? 
				<div onClick={this.handleClick.bind(this)} style={iconStyle}>x</div>
				: null }
			</div>
				: null } </div>
		)
	}
}

module.exports = Alert;
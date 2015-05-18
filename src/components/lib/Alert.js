import React from "react";
import classNames from "classnames";

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
			"tools-alert": true
		});

		styles += this.props.color ? " tools-alert-" + this.props.color : "";

		return (
			<div>
				{this.state.showAlert ?
					<div style={wrapperStyle}>
						<div className={classNames(this.props.className, styles)} style={this.props.style}>
							{this.props.children}
						</div>
						{this.props.remove ?
						<div onClick={this.handleClick.bind(this)} style={iconStyle}>x</div>
						: null }
					</div>
				: null }
			</div>
		);
	}
}

Alert.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	color: React.PropTypes.oneOf(["black", "blue", "red", "yellow", "green"]),
	outline: React.PropTypes.bool,
	remove: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = Alert;

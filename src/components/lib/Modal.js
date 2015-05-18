import React from "react";
import classNames from "classnames";

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: this.props.show };
	}

	handleClose() {
		this.setState({
			show: false
		});

		//callback
		this.props.onClose ? this.props.onClose() : null; //eslint-disable-line
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			show: nextProps.show
		});

		if(nextProps.show){
			this.props.onShow();
		}
	}

	render() {
		let modalClasses = classNames({
			"modal": true
		});

		let boxStyle = {
			"padding": this.props.padding
		};

		if(this.state.show){
			return (
				<div className="modal-box" style={boxStyle}>
					<div className={classNames(this.props.className, modalClasses)} style={this.props.style}>
						<header className={this.props.titleClassName}>{this.props.title}</header>
						<span className="modal-close" onClick={this.handleClose.bind(this)}>x</span>
						<section className={this.props.contentClassName}>
							{this.props.children}
						</section>
						<footer>
						</footer>
					</div>
				</div>
			);
		} else {
			return (null);
		}
	}

}

Modal.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	contentClassName: React.PropTypes.string,
	onClose: React.PropTypes.func,
	onShow: React.PropTypes.func,
	padding: React.PropTypes.string,
	show: React.PropTypes.bool,
	style: React.PropTypes.object,
	title: React.PropTypes.string,
	titleClassName: React.PropTypes.object,
	width: React.PropTypes.string
};

Modal.defaultProps = {padding: "50px", show: false};

module.exports = Modal;

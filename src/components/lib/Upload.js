import React from "react";
import classNames from "classnames";

class Upload extends React.Component {
	constructor(props){
		super(props);
		this.state = { dragging: false };
	}

	handleDragStart(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			dragging: true
		});
	}

	handleDragEnd(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			dragging: false
		});
	}

	handleFileDrop(e) {
		e.preventDefault();
		e.stopPropagation();
		React.findDOMNode(this.refs.fileUpload).files = e.dataTransfer.files;
		this.onDrop ? this.onDrop(e.dataTransfer.files) : null; //eslint-disable-line
		this.setState({
			dragging: false
		});
	}

	render() {
		let styles = classNames({
			"tools-droparea": true,
			"drag-hover": this.state.dragging
		});

		return (
			<div className={classNames(this.props.className, styles)} onDragLeave={this.handleDragEnd.bind(this)} onDragOver={this.handleDragStart.bind(this)} onDrop={this.handleFileDrop.bind(this)} style={this.props.style}>
				<div className="tools-droparea-placeholder">
					{this.props.placeholder}
					<input id="file" name="file" ref="fileUpload" type="file" />
				</div>
			</div>
		);
	}
}

Upload.propTypes = {
	className: React.PropTypes.string,
	onDrop: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = Upload;

import React from "react";
import classNames from "classnames";

class TextArea extends React.Component {

	render() {
		let styles = this.props.width ? "width-" + this.props.width : "";

		return (
			<label>
				{this.props.label}
				<textarea
					className={classNames(this.props.className, styles)}
					disabled={this.props.disabled}
					rows={this.props.rows}>
				</textarea>
			</label>
		);
	}
}

TextArea.propTypes = {
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	label: React.PropTypes.string,
	rows: React.PropTypes.number,
	width: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

module.exports = TextArea;

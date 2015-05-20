import React from "react";
import Input from "./Input";
import classNames from "classnames";

class Search extends React.Component {
	render() {
		let styles = classNames({
			"input-search": true
		});

		styles += this.props.color ? " btn-" + this.props.color : "";

		let searchStyle = this.props.rounded ? {} : { borderRadius: "0 !important"};

		let inputField =
			<Input className={classNames(this.props.className, styles)} description={this.props.description} label={this.props.label} onBlur={this.props.onBlur} onChange={this.props.onChange} placeholder={this.props.placeholder} style={searchStyle} type="text" value={this.props.value} />;

		return (
			<div>
			{this.props.button ?
				<div className="input-groups">
					{inputField}
					<span className="btn-append">
						<button className="btn">
							{this.props.button}
						</button>
					</span>
					</div>
					: {inputField} }
			</div>
		);
	}
}

Search.propTypes = {
	button: React.PropTypes.string,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.oneOf(["black", "blue", "red", "yellow", "green", "white"]),
	description: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onBlur: React.PropTypes.func,
	onChange: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	rounded: React.PropTypes.bool,
	value: React.PropTypes.string,
	width: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

Search.defaultProps = {rounded: false};

module.exports = Search;

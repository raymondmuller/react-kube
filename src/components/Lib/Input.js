const React = require("react");
const classNames = require("classnames");

class Input extends React.Component {

	render() {
		let styles = classNames({
			"input-error": this.props.error,
			"input-success": this.props.success,
			"input-gray": this.props.gray,
			"input-big": this.props.big,
			"input-small": this.props.small,
			"input-smaller": this.props.smaller,
			"input-on-black": this.props.black
		});

		styles += this.props.width ? " width-" + this.props.width : "";

		let validation =
			<span>
				{this.props.required ? <span className="req">*</span> : null}
				{this.props.description ? <span className="forms-desc"> {this.props.description}</span> : null }
				{this.props.errorMessage && this.props.error ? <span className="error"> {this.props.errorMessage}</span> : null}
				{this.props.successMessage && this.props.success ? <span className="success"> {this.props.successMessage}</span> : null}
			</span>;

		if(this.props.label){
			return (
				<label>
					{this.props.label}
					{validation}
					<input className={classNames(this.props.className, styles)} disabled={this.props.disabled} name={this.props.name} placeholder={this.props.placeholder} size={this.props.size} style={this.props.style} type={this.props.type} />
				</label> );
		} else { return (
						<span>
						{validation}
						<input className={classNames(this.props.className, styles)} disabled={this.props.disabled} name={this.props.name} placeholder={this.props.placeholder} size={this.props.size} style={this.props.style} type={this.props.type} />
					</span>
				);
			}
		}
}

Input.propTypes = {
	big: React.PropTypes.bool,
	black: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	errorMessage: React.PropTypes.string,
	gray: React.PropTypes.bool,
	small: React.PropTypes.bool,
	smaller: React.PropTypes.bool,
	style: React.PropTypes.object,
	successMessage: React.PropTypes.string
};

Input.defaultProps = {type: "text", width: "50"};

module.exports = Input;

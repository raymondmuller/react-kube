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

	if(this.props.width) {
		styles += " width-" + this.props.width;
	}

	let validation = <span>
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
				<input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} size={this.props.size} disabled={this.props.disabled} className={classNames(this.props.className, styles)} style={this.props.style} />
			</label> );
	} else { return (
					<span>
					{validation}
					<input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} size={this.props.size} disabled={this.props.disabled} className={classNames(this.props.className, styles)} style={this.props.style} />
				</span>
			);
		}
	}
}

Input.defaultProps = {type: "text", width: "50"};

module.exports = Input;

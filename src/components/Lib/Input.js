const React = require("react");
var classNames = require("classnames");
var styles;

class Input extends React.Component {

	componentWillMount() {

		styles = classNames({
			"input-error": this.props.error,
			"input-success": this.props.success,
			"input-gray": this.props.gray,
			"input-big": this.props.big,
			"input-small": this.props.small,
			"input-smaller": this.props.smaller,
			"input-on-black": this.props.black
		});

		if(this.props.width) {
			styles = " width-" + this.props.width
		}
	}

    render() {
        return (
            <label>{this.props.label}
            	{this.props.required ? <span className="req">*</span> : null }
            	{this.props.description ? <span className="forms-desc">{this.props.description}</span> : null }
            	{this.props.errorMsg && this.props.error ? <span className="error">{this.props.errorMsg}</span> : null}
            	{this.props.successMsg && this.props.success ? <span className="success">{this.props.successMsg}</span> : null}
                <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} size={this.props.size} disabled={this.props.disabled} className={classNames(this.props.className, styles)} />
            </label>
        )
    }
}

Input.defaultProps = {type: "text", width:"50"};

module.exports = Input;
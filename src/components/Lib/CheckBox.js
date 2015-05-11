const React = require("react");
var classNames = require("classnames");
var styles;

class CheckBox extends React.Component {

	render() {
		return (
			<li>
        <input type="checkbox" name={this.props.id} id={this.props.id} disabled={this.props.disabled} >
        <label for={this.props.id}>{this.props.children}</label>
    	</li>
		)
	}

}
Checkbox.propTypes = {disabled: React.PropTypes.bool };
Checkbox.defaultProps = {disabled: false}

module.exports = CheckBox;


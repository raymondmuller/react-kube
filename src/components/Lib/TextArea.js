const React = require("react");
var classNames = require("classnames");
var styles;

class TextArea extends React.Component {

	componentWillMount() {
		if(this.props.width) {
			styles = "width-" + this.props.width;
		}
	}
	
	render() {
		return (
			<label>
		        {this.props.label}
		        <textarea rows={this.props.rows} className={classNames(this.props.className, styles)} disabled={this.props.disabled}></textarea>
		    </label>
		)
	}

}

module.exports = TextArea;
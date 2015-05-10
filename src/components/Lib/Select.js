const React = require("react");
var classNames = require("classnames");
var styles;

class Select extends React.Component {

	componentWillMount() {
		if(this.props.width) {
			styles =  "width-" + this.props.width;
		}
	}

	render() {
		return (
		 <select name={this.props.name} className={styles} multiple={this.props.multiple} size={this.props.size} disabled={this.props.disabled}>
    		{this.props.children}
    		{this.props.description ? <div className="forms-desc">{this.props.description}</div> : null }
        </select>
		)
	}
}

module.exports = Select;


const React = require("react");
const classNames = require("classnames");

class Select extends React.Component {
	render() {
		let styles;
		if(this.props.width) {
			styles = "width-" + this.props.width;
		}
		return (<select name={this.props.name} className={classNames(this.props.className, styles)} multiple={this.props.multiple} size={this.props.size} disabled={this.props.disabled}>
			{this.props.children}
			{this.props.description ? <div className="forms-desc">{this.props.description}</div> : null }
			</select>
		);
	}
}

module.exports = Select;


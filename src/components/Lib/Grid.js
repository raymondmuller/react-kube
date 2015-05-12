const React = require("react");
var classNames = require("classnames");
var styles;

class Grid extends React.Component {

	componentWillMount() {
		styles = classNames({
			"units-row": true,
			"units-padding": this.props.padding,
			"units-split": this.props.disabled,
			"end": this.props.end
		})
		
		if(this.props.mobile) {
			styles+= " units-mobile-" + this.props.mobile
		}
	}
	
	render() {
		return (
				<div className={classNames(this.props.className, styles)}>{this.props.children}</div>
		)}
}

module.exports = Grid;
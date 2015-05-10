const React = require("react");
var classNames = require("classnames");
var styles;

class GridItem extends React.Component {

	componentWillMount() {
		styles = classNames({
			"unit-centered": this.props.centered,
			"unit-push-right": this.props.right,
			"end": this.props.margin,
			"units-split": this.props.disabled
		})
		if(this.props.size) {
			styles += "unit-" + this.props.size;
		}
		if(this.props.push) {
			styles += "unit-push-" + this.props.push;
		}
		
	}
	
	render() {
		return (
			<div className={classNames(this.props.className, styles)}>{this.props.children}</div>
		)
	}

}

module.exports = GridItem;
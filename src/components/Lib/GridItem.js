const React = require("react");
var classNames = require("classnames");
var styles;

class Blocks extends React.Component {

	componentWillMount() {
		styles = classNames({
			"unit-centered": this.props.centered,
			"unit-push-right": this.props.right,
			"end": this.props.margin,
			"units-split": this.props.disabled
		})
		if(this.props.size) {
			styles += " unit-" + this.props.size;
		}
		if(this.props.push) {
			styles += " unit-push-" + this.props.push;
		}
		
	}
	
	render() {
		return (
			<ul className={styles}>{this.props.children}</ul>
		)
	}

}

module.exports = Blocks;
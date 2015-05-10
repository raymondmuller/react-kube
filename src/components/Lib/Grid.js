const React = require("react");
var classNames = require("classnames");
var styles;

class Grid extends React.Component {

	componentWillMount() {
		styles = classNames({
			"units-row": true,
			"units-padding": this.props.padding,
			"end": this.props.margin,
			"units-split": this.props.disabled
		})
		if(this.props.mobile) {
			styles+= " units-mobile-" + this.props.mobile
		}
	}
	
	render() {
		return (
			<div className="units-container">
				<div className={styles}>{this.props.children}</div>
			</div>
		)
	}

}

module.exports = Grid;
const React = require("react");
var classNames = require("classnames");
var styles;

class Label extends React.Component {

	componentWillMount() {
		styles = classNames({
			"label": true,
			"label-outline": this.props.outline
		})

		if(this.props.color) {
			styles += " " + "label-" + this.props.color
		}
	}
	
	render() {
		return (
			<span className={classNames(this.props.className, styles)}>
				{this.props.children}
			</span>
		)
	}

}

module.exports = Label;
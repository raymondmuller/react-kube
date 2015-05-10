const React = require("react");
const classNames = require("classnames");
var styles;

class Blocks extends React.Component {

	componentWillMount() {

		if(this.props.amount) {
			styles = "blocks-" + this.props.amount;
		}
		if(this.props.mobile) {
			styles+= " blocks-mobile-" + this.props.mobile
		}
	}
	
	render() {
		return (
			<ul className={classNames(this.props.className, styles)}>
				{this.props.children}
			</ul>
		)
	}

}

module.exports = Blocks;
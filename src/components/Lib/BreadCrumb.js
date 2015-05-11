const React = require("react");
var classNames = require("classnames");
var styles;

class BreadCrumb extends React.Component {

	render() {
		return (
				<li>{this.props.children}	</li>
			)
	}
}

module.exports = BreadCrumb;
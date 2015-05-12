const React = require("react");

class BreadCrumb extends React.Component {

	render() {
		return (
				<li className={this.props.className}>{this.props.children}</li>
		);
	}
}

module.exports = BreadCrumb;

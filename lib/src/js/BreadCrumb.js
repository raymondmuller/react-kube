const React = require("react");

class BreadCrumb extends React.Component {

	render() {
		return (
				<li active={this.props.active} className={this.props.className}>{this.props.children} style={this.props.style}</li>
		);
	}
}

BreadCrumb.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = BreadCrumb;

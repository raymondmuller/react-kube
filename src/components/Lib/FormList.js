const React = require("react");
const classNames = require("classnames");

class FormList extends React.Component {

	render() {
		let styles = this.props.inline ? "forms-inline-list" : "forms-list";
		return (
			<ul className={classNames(this.props.className, styles)} style={this.props.style}>
				{this.props.children}
			</ul>
		);
	}
}

FormList.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	inline: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = FormList;

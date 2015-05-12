const React = require("react");
const classNames = require("classnames");

class FormList extends React.Component {

	render() {
		let styles = this.props.inline ? "forms-inline-list" : "forms-list";
		return (
			<ul className={classNames(this.props.className, styles)}>
				{this.props.children}
			</ul>
		);
	}
}

module.exports = FormList;

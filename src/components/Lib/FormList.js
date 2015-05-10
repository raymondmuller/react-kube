const React = require("react");
var classNames = require("classnames");
var inputStyle;

class FormList extends React.Component {

	componentWillMount() {

		if(this.props.inline) {
			inputStyle = "forms-inline-list";
		} else {
			inputStyle = "forms-list";
		}
	}

    render() {
        return (
            <ul className={inputStyle}> {this.props.children} </ul>
        )
    }
}

module.exports = FormList;
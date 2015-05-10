const React = require("react");
var classNames = require("classnames");
var styles;

class FormList extends React.Component {

	componentWillMount() {
		if(this.props.inline) {
			styles = "forms-inline-list";
		} else {
			styles = "forms-list";
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

module.exports = FormList;
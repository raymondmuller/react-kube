const React = require("react");

class TableHead extends React.Component {

  render() {
    return (
  				<th className={this.props.className}>{this.props.children}</th>
    )
  }
}

module.exports = TableHead;
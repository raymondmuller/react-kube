const React = require("react");

class TableRow extends React.Component {

  render() {
    return (
    	<tbody className={this.props.className}>
  			<tr>
  				{this.props.children}
			</tr>
  		</tbody>
    )
  }
}

module.exports = TableRow;
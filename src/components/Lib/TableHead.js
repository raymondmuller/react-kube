const React = require("react");

class TableHead extends React.Component {

  render() {
    return (
    	<thead className={this.props.className}>
  			<tr>
  				<th>{this.props.children}
				</tr>
  		</thead>
    )
  }
}

module.exports = TableHead;
const React = require("react");

class TableHeader extends React.Component {

  render() {
    return (
    	<thead className={this.props.className}>
  			<tr>
  				{this.props.children}
				</tr>
  		</thead>
    )
  }
}

module.exports = TableHeader;
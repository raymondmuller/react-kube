const React = require("react");
const classNames = require("classnames");
var styles;

class Table extends React.Component {

	componentWillMount() {
		styles = {
			"table-bordered": this.props.bordered,
			"table-simple": this.props.simple,
			"table-flat": this.props.flat,
			"table-stripped": this.props.stripped,
			"table-hovered": this.props.hovered
		}
	}

  render() {
  	let table = 
  		<table>
				{this.props.children}
			</table>

		
    return (
    	<div>
  			{ this.props.responsive ? 
	  		<div className="table-container">
	  			{table}
				</div>
			:  {table} }
  		</div>
    )
  }
}

module.exports = Table;
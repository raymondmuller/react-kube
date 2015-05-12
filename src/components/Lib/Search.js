const React = require("react");
const Input = require("./Input");

var classNames = require("classnames");
var styles;

class Search extends React.Component {

	componentWillMount() {
		styles = classNames({
			"input-search": true
		})

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color
		}
	}
	
	render() {

		let searchStyle;

		this.props.rounded ? 
			searchStyle = null :
			searchStyle = {
				borderRadius: "0 !important"
			}

		return (
			<div>
			{this.props.button ? 
				<div className="input-groups">
					<Input type="text" className={styles} style={searchStyle} placeholder={this.props.placeholder}/>
					<span className="btn-append">
			            <button className="btn">{this.props.button}</button>
			        </span>
					</div> : <Input type="text" className={styles} placeholder={this.props.placeholder} style={searchStyle} /> }
			</div>
		)
	}
}

Search.defaultProps = {rounded: false};

module.exports = Search;
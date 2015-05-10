const React = require("react");
var classNames = require("classnames");
var styles;

class Search extends React.Component {

	componentWillMount() {
		styles = classNames({
			"input-search": true,
			"react-no-border-radius": !this.props.rounded
		})

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color
		}
	}
	
	render() {
			
		return (
			<form action={this.props.action} className={classNames(this.props.className, "forms")}>
			{this.props.button ? 
				<div className="input-groups">
					<input type="text" className={styles} placeholder={this.props.placeholder}/>
					<span className="btn-append">
			            <button className="btn">{this.props.button}</button>
			        </span>
				</div> : <input type="text" className={styles} placeholder={this.props.placeholder}/> }

			</form>
		)
}
}

Search.defaultProps = {rounded: false};

module.exports = Search;
const React = require("react");
const Input = require("./Input");
const classNames = require("classnames");

class Search extends React.Component {
	render() {
		let styles = classNames({
			"input-search": true
		});

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color;
		}

		let searchStyle = this.props.rounded ? null : { borderRadius: "0 !important"};

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
		);
	}
}

Search.defaultProps = {rounded: false};

module.exports = Search;

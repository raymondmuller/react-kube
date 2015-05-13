const React = require("react");
const Input = require("./Input");
const classNames = require("classnames");

class Search extends React.Component {
	render() {
		let styles = classNames({
			"input-search": true
		});

		styles += this.props.color ? " btn-" + this.props.color : "";

		let searchStyle = this.props.rounded ? {} : { borderRadius: "0 !important"};

		return (
			<div>
			{this.props.button ?
				<div className="input-groups">
					<Input className={styles} placeholder={this.props.placeholder} style={searchStyle} type="text"/>
					<span className="btn-append">
						<button className="btn">
							{this.props.button}
						</button>
					</span>
					</div>
					: <Input className={styles} placeholder={this.props.placeholder} style={searchStyle} type="text" /> }
			</div>
		);
	}
}

Search.propTypes = {
	button: React.PropTypes.string,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	description: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	name: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	rounded: React.PropTypes.bool,
	size: React.PropTypes.number
};

Search.defaultProps = {rounded: false};

module.exports = Search;

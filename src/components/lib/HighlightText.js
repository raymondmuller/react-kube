const React = require("react");

class HiglightText extends React.Component {

	render() {
		let text = this.props.text;
		let query = this.props.query;
		let searchIndex = text.toLowerCase().indexOf(query);

		return (
			<span>
				{text.substring(0, searchIndex)}
				<span className="highlight">{text.substring(searchIndex, searchIndex + query.length)}</span>
				{text.substring(searchIndex + query.length, text.length)}
			</span>
		);
	}

}

HiglightText.propTypes = {
	query: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired
};

module.exports = HiglightText;

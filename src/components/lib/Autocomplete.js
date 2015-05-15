const React = require("react");
const classNames = require("classnames");
const Input = require("./Input");

class Autocomplete extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [ ],
			show: true,
			value: this.props.value};
		}

	componentDidMount() {
		//Calculate width of the input field to equal the suggestions lists width
		this.inputWidth = React.findDOMNode(this.refs.autocompleteInput).offsetWidth;
	}

	handleBlur() {
		//hide suggestions on blur
		if(this.state.show) {
			this.setState({
				show: false
			});
		}
		//on blur callback
		this.props.onBlur ? this.props.onBlur : null;
	}

	handleChange(e) {
		// change value of input
		this.setState({
			value: e.target.value
		});

		let suggestionList = [];
		if(e.target.value.length) {
			if(this.props.data[0].label) {
				suggestionList = [];
				for(let item of this.props.data) {
					switch(this.props.rule) {
						case "contains":
							if(item.label.toLowerCase().search(e.target.value.toLowerCase()) !== -1 && e.target.value.length <= item.label.length){
								suggestionList.push(item);
							}
							break;
						case "exact":
							if(item.label.toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase()){
								suggestionList.push(item);
							}
							break;
						}
					}
			} else {
			suggestionList = this.props.data.filter((item) => {
					switch(this.props.rule) {
						case "contains":
							return (
								item.toLowerCase().search(e.target.value.toLowerCase()) !== -1 && e.target.value.length <= item.length
								);
						case "exact":
							return (
							item.toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase()
							);
					}
				});
			}
		}
		else {
			suggestionList = [];
		}

		if(this.props.limit && suggestionList.length > this.props.limit) {
			suggestionList = suggestionList.slice(0, this.props.limit);
		}

		this.setState({data: suggestionList});

		// show the suggestions
		if(suggestionList.length > 0) {
			this.setState({
				show: true
			});
		}

		// on change callback
		this.props.onChange ? this.props.onChange(e.target.value) : null;
	}

	handleSelect(suggestion, e) {

		// close suggestions and set value on selection
		this.setState({
			show: false,
			value: e.target.innerHTML
		});

		// on select callback
		this.props.onSelect ? this.props.onSelect(suggestion) : null;
	}

	render() {

		let wrapperStyle = {
			position: "relative"
		};

		let listClasses = classNames({
			"autocomplete": true
		});

		let listStyle = {
			display: "block",
			width: this.inputWidth
		};

		let suggestions;
		if(this.props.data[0].label) {
			suggestions = this.state.data.map((suggestion, i) => {
				return (
					<li key={i}><a key={i} onMouseDown={this.handleSelect.bind(this, suggestion)} ref={i}>{suggestion.label}</a></li>
				);
			});
		} else {
			suggestions = this.state.data.map((suggestion, i) => {
					return (
						<li key={i}><a key={i} onMouseDown={this.handleSelect.bind(this, suggestion)} ref={i}>{suggestion}</a></li>
					);
			});
		}

		return (
			<span>
				<div style={wrapperStyle}>
					<Input autoComplete="false" description={this.props.description} label={this.props.label} name="q" onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)} ref="autocompleteInput" type="text" value={this.state.value} width={this.props.width}/>
						{this.state.show ?
					<ul className={classNames(this.props.listClassName, listClasses)} style={listStyle}>
						{suggestions}
					</ul>	: null }
				</div>
			</span>
		);
	}
}

Autocomplete.propTypes = {
	className: React.PropTypes.string,
	data: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.string),
		React.PropTypes.arrayOf(React.PropTypes.shape({
			label: React.PropTypes.string,
			value: React.PropTypes.any
			}))
		]),
	description: React.PropTypes.string,
	label: React.PropTypes.string,
	limit: React.PropTypes.number,
	listClassName: React.PropTypes.string,
	onBlur: React.PropTypes.func,
	onChange: React.PropTypes.func,
	onSelect: React.PropTypes.func,
	rule: React.PropTypes.oneOf(["contains", "exact"]),
	style: React.PropTypes.object,
	value: React.PropTypes.string,
	width: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
};

Autocomplete.defaultProps = { rule: "contains"};

module.exports = Autocomplete;

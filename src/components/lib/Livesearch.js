const React = require("react");
const classNames = require("classnames");

class Livesearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {left: 0, top: 0, results: [], value: ""};
	}

	componentDidMount() {
		let posTop = React.findDOMNode(this.refs.liveSearchInput).offsetTop;
		let posLeft = React.findDOMNode(this.refs.liveSearchInput).offsetLeft;
		let inputWidth = React.findDOMNode(this.refs.liveSearchInput).offsetWidth;
		let posLeftClose = inputWidth + posLeft - 25;
		let posTopClose = posTop + 2;

		this.inputHeight = React.findDOMNode(this.refs.liveSearchInput).offsetHeight;

		this.setState({
			top: posTopClose,
			left: posLeftClose
		});
	}

	handleCloseClick() {
		this.setState({
			value: ""
		});
		this.props.onClose ? this.props.onClose() : null; //eslint-disable-line
	}

	handleInputChange(e){
		this.setState({
			value: e.target.value
		});

		let results = this.props.data.filter((item) => {
			return item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
		});

		this.setState({
			results: results
		});

		this.props.onChange ? this.props.onChange(e.target.value) : null; //eslint-disable-line
	}

	render() {
		let liveSearchClasses = {
			"livesearch-box": true
		};

		let closeStyle = {
			left: this.state.left,
			top: this.state.top,
			right: "8px",
			visibility: this.state.value !== "" ? "visible" : "hidden",
			width: "17px"
		};

		let livesearchIconStyle = {
			top: this.inputHeight / 2 + 2
		};

		let results = this.state.results.map(function(item) {
			return <div>{item}</div>;
		});

		return (
			<div className={classNames(this.props.className, liveSearchClasses)} style={this.props.style}>
				<input onChange={this.handleInputChange.bind(this)} placeholder={this.props.placeholder} ref="liveSearchInput" type="search" value={this.state.value} />
				<span className="livesearch-icon" style={livesearchIconStyle}></span>
				<span className="close" onClick={this.handleCloseClick.bind(this)} style={closeStyle}></span>
				<div className={this.props.resultsClassName} id="liveSearchResults" ref="liveSearchResults">
					<br/>
					{results}
				</div>
			</div>
			);
	}
}

Livesearch.propTypes = {
	className: React.PropTypes.string,
	data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	onChange: React.PropTypes.func,
	onClose: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	resultsClassName: React.PropTypes.string,
	style: React.PropTypes.object
};

module.exports = Livesearch;

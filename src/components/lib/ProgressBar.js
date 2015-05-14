const React = require("react");
const classNames = require("classnames");

class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { progress: this.props.progress };
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.progress >= 0 && nextProps.progress <= 100){
			let progress = nextProps.progress + "%";
			this.setState({
				progress: progress
			});
		}
	}

	render() {

		let progressStyle = {
			width: this.state.progress
		};

		return (
			<div id="tools-progress" className={this.props.className} style={this.props.style}>
				<span style={progressStyle}></span>
			</div>
			);
	}
}

ProgressBar.propTypes = {
	className: React.PropTypes.string,
	progress: React.PropTypes.number,
	style: React.PropTypes.object
};

ProgressBar.defaultProps = { progress: 100 };

module.exports = ProgressBar;

const React = require("react");
var classNames = require("classnames");
var styles;
var wrapperStyle;

class Alert extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showAlert: true };
	}

	componentWillMount() {

		wrapperStyle = {
			position: 'relative'
		};

		styles = classNames({
			"tools-alert": true
		})

		if(this.props.color) {
			styles += " " + "tools-alert-" + this.props.color
		}
	}
	
	handleClick() {
		if(this.props.remove) {
			this.setState({ showAlert: false });
		}
	}

	render() {
		return (
			<div>{this.state.showAlert ? 
			<div className="react-alert-wrapper">
				<div className={styles}>{this.props.children}</div>
				{this.props.remove ? 
				<div className="fa fa-times" onClick={this.handleClick.bind(this)}></div>
				: null }
			</div>
				: null } </div>
		)
	}
}

module.exports = Alert;
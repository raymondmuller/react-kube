const React = require("react");
var classNames = require("classnames");
var styles;
var messageStyle;

class Message extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showMessage: props.show}
	}

	componentWillMount() {
		messageStyle = {
			top: this.props.top,
			right: this.props.right,
			left: this.props.left,
			bottom: this.props.bottom,
			position: this.props.position
		}

		styles = classNames({
			"messageCustom": true,
			"tools-message": true
		})

		if(this.props.color) {
			styles += " " + "tools-message-" + this.props.color
		}
	}

	handleClick() {
		this.setState({showMessage: false});
	}
	
	render() {
			if(this.state.showMessage) {
				return (
					<div onClick={this.handleClick.bind(this)} className={styles} style={messageStyle}>{this.props.children}</div>
				)
			} 
			else {
				return ( null ) }
			}
		
}

Message.propTypes = { show: React.PropTypes.boolean };
Message.defaultProps = {show: false}

module.exports = Message;
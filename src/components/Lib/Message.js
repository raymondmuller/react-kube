const React = require("react");
var classNames = require("classnames");

class Message extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showMessage: props.show}
	}

	handleClick() {
		this.state.showMessage ? this.setState({showMessage: false}) : null
	}

	
	componentWillReceiveProps(nextProps) {
		this.setState({
			showMessage: nextProps.show
		})
	}

	render() {
			let styles;

			this.props.color ?
			styles = "tools-message tools-message-" + this.props.color
		 : styles="tools-message";
		 
			let messageStyle = {
				top: this.props.top,
				right: this.props.right,
				left: this.props.left,
				bottom: this.props.bottom,
				position: this.props.position,
				display: "block !important"
			}

			if(this.state.showMessage) {
				return (
					<div onClick={this.handleClick.bind(this)} className={classNames(this.props.className, styles)} style={messageStyle}>{this.props.children}</div>
				)
			} 
			else {
				return ( null ) }
			}
		
}

Message.propTypes = { show: React.PropTypes.bool };
Message.defaultProps = {show: false}

module.exports = Message;
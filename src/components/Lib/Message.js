const React = require("react");
const classNames = require("classnames");

class Message extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showMessage: props.show};
	}

	handleClick() {
		this.setState({showMessage: false});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			showMessage: nextProps.show
		});
	}

	render() {
		let styles = this.props.color ? "tools-message tools-message-" + this.props.color : "tools-message";
		let messageStyle = {
			top: this.props.top,
			right: this.props.right,
			left: this.props.left,
			bottom: this.props.bottom,
			position: this.props.position,
			display: "block !important"
		};

		if(this.state.showMessage) {
			return (
				<div className={classNames(this.props.className, styles)} onClick={this.handleClick.bind(this)} style={messageStyle, this.props.style}>
					{this.props.children}
				</div>
			);
		} else {
			return ( null );
		}
	}
}

Message.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	show: React.PropTypes.bool,
	style: React.PropTypes.object
};

Message.defaultProps = {show: false};

module.exports = Message;

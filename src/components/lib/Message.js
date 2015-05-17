const React = require("react");
const classNames = require("classnames");

class Message extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showMessage: props.show};
	}

	handleClick() {
		this.setState({showMessage: false});
		this.props.onClose ? this.props.onClose() : null; //eslint-disable-line
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.show){
			this.setState({
				showMessage: nextProps.show
			});
			this.props.onShow ? this.props.onShow() : null; //eslint-disable-line
		}

		// close automatically after x seconds
		if(this.props.delay) {
			if(nextProps.show) {
				setTimeout(() => {
					this.setState({
						showMessage: false
				});
				this.props.onClose ? this.props.onClose() : null; //eslint-disable-line
			}, this.props.delay);
			}
		}
	}

	render() {
		let styles = this.props.color ? "tools-message tools-message-" + this.props.color : "tools-message";
		let messageStyle = {
			bottom: this.props.bottom,
			display: "block !important",
			left: this.props.left,
			position: this.props.position,
			right: this.props.right,
			top: this.props.top,
			zIndex: this.props.position !== "relative" ? 101 : 100
		};

		return (
			<span>
			{this.state.showMessage ?
				<div className={classNames(this.props.className, styles)} onClick={this.handleClick.bind(this)} style={messageStyle}>
					{this.props.children}
				</div>
				: null }
			</span>
			);
	}
}

Message.propTypes = {
	bottom: React.PropTypes.number,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	delay: React.PropTypes.number,
	left: React.PropTypes.number,
	onClose: React.PropTypes.func,
	onShow: React.PropTypes.func,
	position: React.PropTypes.string,
	right: React.PropTypes.number,
	show: React.PropTypes.bool,
	style: React.PropTypes.object,
	top: React.PropTypes.number
};

Message.defaultProps = {show: false};

module.exports = Message;

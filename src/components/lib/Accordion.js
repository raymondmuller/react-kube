const React = require("react");
const classNames = require("classnames");

class Accordion extends React.Component {

	constructor(props) {
		super(props);
		this.state = { show: !this.props.collapse };
	}

	handleClick() {
		let shown = !this.state.show;
		this.setState({
			show: shown
		});
		
		//callbacks
		shown ? this.props.onShow : this.props.onClose;
	}

	render() {
		let titleStyles = classNames({
			"accordion-title": true,
			"accordion-title-closed": this.state.show === false,
			"accordion-title-opened": this.state.show === true
		});

		let toggleStyles = classNames({
			"accordion-toggle": true,
			"accordion-toggle-closed": this.state.show === false,
			"accordion-toggle-opened": this.state.show === true
		});

		let panelStyles = classNames({
			"accordion-panel": true
		});

		return (
			<span>
					<a className={classNames(this.props.className, titleStyles)} href="#" onClick={this.handleClick.bind(this)} style={this.props.style}>
						{this.props.title}
						<span className={classNames(this.props.toggleClassName, toggleStyles)} style={this.props.toggleStyle}></span>
					</a>
						{this.state.show ?
					<div className={classNames(this.props.panelClassName, panelStyles)} style={this.props.panelStyle}>{this.props.children}</div>
						: null }
			</span>
		);
	}
}

Accordion.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	collapse: React.PropTypes.bool,
	onClose: React.PropTypes.func,
	onShow: React.PropTypes.func,
	panelClassName: React.PropTypes.string,
	panelStyle: React.PropTypes.object,
	remove: React.PropTypes.bool,
	style: React.PropTypes.object,
	title: React.PropTypes.string,
	toggleClassName: React.PropTypes.string,
	toggleStyle: React.PropTypes.object
};

Accordion.defaultProps = { collapse: true};

module.exports = Accordion;

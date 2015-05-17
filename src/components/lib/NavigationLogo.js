const React = require("react");

class NavigationLogo extends React.Component {

	handleClick() {
		if(this.props.onItemClick) { this.props.onItemClick(); }
	}

	render() {
		return (
			<div className={this.props.className} id="logo" onClick={this.handleClick.bind(this)} style={this.props.style}>
				<a href={this.props.url ? this.props.url : "/"} target="_self">
					{this.props.children}
				</a>
			</div>
		);
	}
}

NavigationLogo.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	onItemClick: React.PropTypes.func,
	style: React.PropTypes.object,
	url: React.PropTypes.string
};

NavigationLogo.defaultProps = {icon: null};

module.exports = NavigationLogo;

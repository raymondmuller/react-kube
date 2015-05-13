const React = require("react");
var classNames = require("classnames");

class NavigationItem extends React.Component {

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {
		let iconStyles = this.props.icon ? "fa " + "fa-" + this.props.icon : "";
		let styles = classNames({
			"active": this.props.active
		});
		return (
			<li className={classNames(this.props.className, styles)} index={this.props.index} onClick={this.handleClick.bind(this)} style={this.props.style}>
				<a className={iconStyles} href={this.props.url} target={this.props.target ? this.props.target : "_self"} >
				{this.props.children}
			</a>
		</li>);
	}
}

NavigationItem.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	icon: React.PropTypes.string,
	index: React.PropTypes.number,
	onItemClick: React.PropTypes.func,
	style: React.PropTypes.object,
	target: React.PropTypes.string,
	url: React.PropTypes.string
};

NavigationItem.defaultProps = {icon: null};

module.exports = NavigationItem;

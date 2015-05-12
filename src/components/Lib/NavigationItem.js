const React = require("react");
var classNames = require("classnames");

class NavigationItem extends React.Component {

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {
		let iconStyles = this.props.icon ? "fa " + "fa-" + this.props.icon : null;
		let styles = classNames({
			"active": this.props.active
		});
		return (
			<li className={classNames(this.props.className, styles)} index={this.props.index} onClick={this.handleClick.bind(this)}>
				<a href={this.props.url} target={this.props.target ? this.props.target : "_self"} className={iconStyles}>
				{this.props.children}
			</a>
		</li>);
	}
}

NavigationItem.defaultProps = {icon: null};

module.exports = NavigationItem;

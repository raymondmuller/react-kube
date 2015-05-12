const React = require("react");
var classNames = require("classnames");
var defaultStyle;
var styles;
var iconStyles;

class NavigationItem extends React.Component {

	setActive(active) {
		active ? styles = defaultStyle + " active" : styles = defaultStyle;
	}

	componentWillMount() {
		this.setActive(this.props.active);
	}

	componentWillReceiveProps(nextProps) {
		this.setActive(nextProps.active);
	}

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {

		this.props.icon ? iconStyles = "fa " + "fa-" + this.props.icon : iconStyles = null

		return (
			<li className={classNames(this.props.className, styles)} index={this.props.index} onClick={this.handleClick.bind(this)}>
				<a href={this.props.url} target={this.props.target ? this.props.target : "_self"} className={iconStyles}>
				{this.props.children}
			</a>
		</li>)
	}
}

NavigationItem.defaultProps = {icon: null}

module.exports = NavigationItem;
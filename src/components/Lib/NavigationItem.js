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

		iconStyles = "fa " + "fa-" + this.props.icon

		defaultStyle = classNames({
			navigationItemCustom: true
		})
		this.setActive(this.props.active);
	}

	componentWillUpdate(nextProps, nextState) {
		this.setActive(nextProps.active)
		iconStyles = "fa " + "fa-" + this.props.icon
	}

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {
		return (<li className={styles} index={this.props.index} onClick={this.handleClick.bind(this)}><a href={this.props.url} className={iconStyles}>{this.props.children}</a></li>)
	}
}

module.exports = NavigationItem;
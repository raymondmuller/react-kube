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

		defaultStyle = classNames({
			navigationItemCustom: true
		})
		this.setActive(this.props.active);
	}

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {
		
		this.props.icon ? iconStyles = "fa " + "fa-" + this.props.icon : null

		return (<li className={classNames(this.props.className, styles)} index={this.props.index} onClick={this.handleClick.bind(this)}>
			<a href={this.props.url} target={this.props.target ? this.props.target : "_self"} className={iconStyles}>
				{this.props.children}
			</a>
		</li>)
	}
}

module.exports = NavigationItem;
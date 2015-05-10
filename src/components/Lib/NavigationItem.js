const React = require("react");
var classNames = require("classnames");
var defaultStyle;
var styles;

class NavigationItem extends React.Component {

	setActive(active) {
		active ? styles = defaultStyle + " active" : styles = defaultStyle;
	}

	componentWillMount() {
		console.log(this.props)
		defaultStyle = classNames({
			navigationItemCustom: true
		})
		this.setActive(this.props.active);
	}

	componentWillUpdate(nextProps, nextState) {
		this.setActive(nextProps.active)
	}

	handleClick() {
		this.props.onItemClick(this.props.id);
	}

	render() {
		return (<li className={styles} onClick={this.handleClick.bind(this)}><a href={this.props.url}>{this.props.children}</a></li>)
	}

}

module.exports = NavigationItem;
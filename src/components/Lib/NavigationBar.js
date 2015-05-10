const React = require("react");

var classNames = require("classnames");
var styles;

class NavigationBar extends React.Component {

	componentWillMount() {
		styles = classNames({
			"navbar": true,
			"navbar-left": this.props.left,
			"navbar-right": this.props.right,
			"navigationBarCustom": true
		})
	}

	componentWillUpdate(nextProps) {
		styles = classNames({
			"navbar": true,
			"navbar-left": this.props.left,
			"navbar-right": this.props.right,
			"navigationBarCustom": true
		})}


	render() {
		var children = React.Children.map(this.props.children, function(child, i) {
    return React.cloneElement(child, {active: this.props.index + "" + i == this.props.active, index: i, onItemClick: this.props.onItemClick})
		}, this)

		return ( <ul className={styles}>{children}</ul> )
	}

}

module.exports = NavigationBar;
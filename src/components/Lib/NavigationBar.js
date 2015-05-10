const React = require("react");
var classNames = require("classnames");

class NavigationBar extends React.Component {

	render() {

		let styles = classNames({
			"navbar": true,
			"navbar-left": this.props.left,
			"navbar-right": this.props.right
		})

		let children = React.Children.map(this.props.children, function(child, i) {
    	return React.cloneElement(child, {active: this.props.index + "" + i == this.props.active, index: i, onItemClick: this.props.onItemClick})
		}, this)

		return ( <ul className={classNames(this.props.className, styles)}>{children}</ul> )
	}

}

module.exports = NavigationBar;
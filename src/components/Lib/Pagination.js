const React = require("react");
var classNames = require("classnames");
var styles;

class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: "1" }
	}
	componentWillMount() {
		styles = classNames({
			"pagination": true
		})
	}

	handleItemClick(index) {
		console.log("should set active")
		this.setState({
			active: index
		})	
	}

	render() {
			var children = React.Children.map(this.props.children, function(child, i) {
    return React.cloneElement(child, {active: i === this.state.active, onItemClick: this.handleItemClick.bind(this, i), index: i})
		}, this)

		return (
			<ul className={classNames(this.props.className, styles)}>
			    <li><a href={this.props.left}>&larr;</a></li>
						{children}
			    <li><a href={this.props.right}>&rarr;</a></li>
			</ul>
		)
	}

}

Pagination.defaultProps = {left: "#", right: "#"};

module.exports = Pagination;
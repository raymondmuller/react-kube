const React = require("react");
const classNames = require("classnames");

class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: "1" };
	}

	handleItemClick(index) {
		this.setState({
			active: index
		});
	}

	render() {
		let styles = classNames({
			"pagination": true
		});
		let children = React.Children.map(this.props.children, function(child, i) {
			return React.cloneElement(child, {active: i === this.state.active, onItemClick: this.handleItemClick.bind(this, i), index: i});
		}, this);

		return (
			<ul className={classNames(this.props.className, styles)}>
					<li><a href={this.props.left}>&larr;</a></li>
						{children}
					<li><a href={this.props.right}>&rarr;</a></li>
			</ul>
		);
	}
}

Pagination.defaultProps = {left: "#", right: "#"};

module.exports = Pagination;

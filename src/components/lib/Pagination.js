import React from "react";
import classNames from "classnames";

class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: this.props.active };
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
			<ul className={classNames(this.props.className, styles)} style={this.props.style}>
					<li><a href={this.props.left}>&larr;</a></li>
						{children}
					<li><a href={this.props.right}>&rarr;</a></li>
			</ul>
		);
	}
}

Pagination.propTypes = {
	active: React.PropTypes.number,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	left: React.PropTypes.string,
	right: React.PropTypes.string,
	style: React.PropTypes.object
};


Pagination.defaultProps = {active: 0, left: "#", right: "#"};

module.exports = Pagination;

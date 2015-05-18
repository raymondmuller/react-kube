import React from "react";

class AccordionGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: 0 };
	}

	updateActive(i, shown) {
		let accordion;
		!shown ? accordion = i : accordion = -1; //eslint-disable-line
		this.setState({
			active: accordion
		});

		shown ? this.props.onShow() : this.props.onClose(); //eslint-disable-line
	}

	render() {

		let children = React.Children.map(this.props.children, function(child, i) {
				return React.cloneElement(child, {active: this.state.active === i, onAccordionClick: this.updateActive.bind(this, i), key: {i}, index: i});
		}, this);

		return (
			<span className={this.props.className} id={this.props.id} style={this.props.style}>{children}</span>
		);
	}
}

AccordionGroup.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	onClose: React.PropTypes.func,
	onShow: React.PropTypes.func,
	style: React.PropTypes.object
};

AccordionGroup.defaultProps = { collapse: true};

module.exports = AccordionGroup;

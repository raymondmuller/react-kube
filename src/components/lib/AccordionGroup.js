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

		if(shown){
			this.props.onShow ? this.props.onShow() : null //eslint-disable-line
			this.props.onClose ? this.props.onClose() : null //eslint-disable-line
		}
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

module.exports = AccordionGroup;

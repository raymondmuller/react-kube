const React = require("react");

class AccordionGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: 0 };
	}

	updateActive(i, shown) {
		let accordion;
		!shown ? accordion = i : accordion = -1;
		this.setState({
			active: accordion
		});

		shown ? this.props.onShow : this.props.onClose;
	}

	render() {

		let children = React.Children.map(this.props.children, function(child, i) {
				return React.cloneElement(child, {active: this.state.active === i, onAccordionClick: this.updateActive.bind(this, i), key: {i}, index: i});
		}, this);

		return (
			<span>{children}</span>
		);
	}
}

AccordionGroup.propTypes = {
	children: React.PropTypes.node.isRequired,
	onClose: React.PropTypes.func,
	onShow: React.PropTypes.func
};

AccordionGroup.defaultProps = { collapse: true};

module.exports = AccordionGroup;

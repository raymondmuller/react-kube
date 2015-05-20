import React from "react";

class Tab extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: this.props.active };
	}

	componentWillReceiveProps(nextProps){
		if("active" in nextProps) {
			this.setState({
				active: nextProps.active
			});
		}
	}

	componentDidMount() {
		this.props.addTab({title: this.props.title});
	}

	render() {
		let children = React.Children.map(this.props.children, function(child) {
					return React.cloneElement(child, {active: true, id: this.props.id, key: this.props.index});
		}, this);

		return (
			<div className={this.props.className} style={this.props.style}>
				{this.props.active ? {children} : null}
			</div>
		);
	}
}

Tab.propTypes = {
	active: React.PropTypes.bool,
	addTab: React.PropTypes.func,
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	index: React.PropTypes.number,
	style: React.PropTypes.object,
	title: React.PropTypes.string.isRequired
};

module.exports = Tab;

const React = require("react");
var classNames = require("classnames");
var defaultStyle;
var styles;

class PaginationItem extends React.Component {

	setActive(active) {
		active ? styles = defaultStyle + " active" : styles = defaultStyle;
	}

	componentWillMount() {
		this.setActive(this.props.active);
	}

	componentWillReceiveProps(nextProps) {
		this.setActive(nextProps.active);
	}

	handleClick() {
		this.props.onItemClick(this.props.index);
	}

	render() {

		return (
			<li className={classNames(this.props.className, styles)} index={this.props.index} onClick={this.handleClick.bind(this)}>
				<a href={this.props.url} target={this.props.target ? this.props.target : "_self"}>
					{this.props.children}
				</a>
		</li>)
	}
}


module.exports = PaginationItem;
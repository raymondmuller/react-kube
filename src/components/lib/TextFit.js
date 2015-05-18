import React from "react";

class TextFit extends React.Component {

  componentDidMount() {
    window.addEventListener("resize", this.resizeText.bind(this));
    this.resizeText();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeText.bind(this));
  }

  resizeText() {
    let element = React.findDOMNode(this);
    let width = element.offsetWidth;
    element.style.fontSize = Math.max(
                      Math.min((width / (this.props.compressor * 10)),
                                parseFloat(this.props.maxFontSize)),
                      parseFloat(this.props.minFontSize)) + "px";
  }

  render() {
    return this.props.children;
  }
}

TextFit.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
  compressor: React.PropTypes.number,
  maxFontSize: React.PropTypes.number,
  minFontSize: React.PropTypes.number,
  style: React.PropTypes.object
};

TextFit.defaultProps = {
	compressor: 1.0,
	minFontSize: Number.NEGATIVE_INFINITY,
	maxFontSize: Number.POSITIVE_INFINITY
};

module.exports = TextFit;

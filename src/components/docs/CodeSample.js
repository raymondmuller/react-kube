import React from "react";

import Accordion from "../lib/Accordion";
import Highlight from "react-highlight";

class CodeSample extends React.Component {

	render() {

		return (
			<span>
			{this.props.noLines ? null : <hr/>}
			<Accordion style={{backgroundColor: "#455A64", color: "white"}} title="SHOW CODE SAMPLE">
			<Highlight className="javascript">
				{(this.props.children)}
			</Highlight>
			</Accordion>
			<br/>
			{this.props.noLines ? null : <hr/>}
			{this.props.noLines ? null : <br/>}
			</span>
		);
	}
}

CodeSample.propTypes = {
	children: React.PropTypes.node.isRequired,
	noLines: React.PropTypes.bool
};

module.exports = CodeSample;

import React from "react";

import Accordion from "../lib/Accordion";
import Highlight from "react-highlight";

class CodeSample extends React.Component {

	render() {

		return (
			<span>
			<br/>
			<Accordion style={{backgroundColor: "#3a4fb9", color: "white"}} title="Show code sample">
			<Highlight className="javascript">
				{(this.props.children)}
			</Highlight>
			</Accordion>
			<br/>
			</span>
		);
	}
}

module.exports = CodeSample;

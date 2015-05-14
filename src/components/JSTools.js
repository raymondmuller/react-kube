const React = require("react");

const FormSection = require("./lib/FormSection");
const Grid = require("./lib/Grid");
const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");

class JSTools extends React.Component {

	render() {
		return (
			<div id="tab3">
				<FormSection name="JS Tools	">
					<Grid>
						Working on it!
					</Grid>
					<AccordionBox />
					<AutocompleteBox />
				</FormSection>
			</div>
		);
	}
}

module.exports = JSTools;

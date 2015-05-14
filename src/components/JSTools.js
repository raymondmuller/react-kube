const React = require("react");

const FormSection = require("./lib/FormSection");
const Grid = require("./lib/Grid");
const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");
const ModalBox = require("./docs/ModalBox");
const ProgressBar = require("./docs/ProgressBarBox");

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

					<ModalBox />
					<ProgressBar />

				</FormSection>
			</div>
		);
	}
}

module.exports = JSTools;

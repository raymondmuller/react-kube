const React = require("react");

const FormSection = require("./lib/FormSection");
const Grid = require("./lib/Grid");
const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");
const ModalBox = require("./docs/ModalBox");
const ProgressBarBox = require("./docs/ProgressBarBox");
const TooltipBox = require("./docs/TooltipBox");

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
					<ProgressBarBox />
					<TooltipBox />

				</FormSection>
			</div>
		);
	}
}

module.exports = JSTools;

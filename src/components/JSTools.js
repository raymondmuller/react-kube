const React = require("react");

const FormSection = require("./lib/FormSection");
const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");
const DropdownBox = require("./docs/DropdownBox");
const FilterBox = require("./docs/FilterBox");
const ModalBox = require("./docs/ModalBox");
const ProgressBarBox = require("./docs/ProgressBarBox");
const TooltipBox = require("./docs/TooltipBox");
const TextFitBox = require("./docs/TextFitBox");

class JSTools extends React.Component {
	render() {
		return (
			<div id="tab3">
				<FormSection name="JS Tools	">
					<AccordionBox />
					<AutocompleteBox />
					<DropdownBox />
					<FilterBox />
					<ModalBox />
					<ProgressBarBox />
					<TooltipBox />
					<TextFitBox />
				</FormSection>
			</div>
		);
	}
}

module.exports = JSTools;

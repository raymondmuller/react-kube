const React = require("react");

const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");
const DropdownBox = require("./docs/DropdownBox");
const FilterBox = require("./docs/FilterBox");
const InfiniteScrollBox = require("./docs/InfiniteScrollBox");
const ModalBox = require("./docs/ModalBox");
const ProgressBarBox = require("./docs/ProgressBarBox");
const TooltipBox = require("./docs/TooltipBox");
const TextFitBox = require("./docs/TextFitBox");

class JSTools extends React.Component {

	render() {
		return (
			<div id="tab3">
				<AccordionBox />
				<AutocompleteBox />
				<DropdownBox />
				<FilterBox />
				<ModalBox />
				<ProgressBarBox />
				<TooltipBox />
				<TextFitBox />
				<InfiniteScrollBox />

			</div>
		);
	}
}

module.exports = JSTools;

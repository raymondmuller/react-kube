const React = require("react");

const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");
const DropdownBox = require("./docs/DropdownBox");
const FilterBox = require("./docs/FilterBox");
const InfiniteScrollBox = require("./docs/InfiniteScrollBox");
const LivesearchBox = require("./docs/LivesearchBox");
const ModalBox = require("./docs/ModalBox");
const ProgressBarBox = require("./docs/ProgressBarBox");
const TooltipBox = require("./docs/TooltipBox");
const TextFitBox = require("./docs/TextFitBox");
const UploadBox = require("./docs/UploadBox");

class JSTools extends React.Component {

	render() {
		return (
			<div id="tab3">
				<AccordionBox />
				<AutocompleteBox />
				<DropdownBox />
				<FilterBox />
				<LivesearchBox />
				<ModalBox />
				<ProgressBarBox />
				<TooltipBox />
				<TextFitBox />
				<InfiniteScrollBox />
				<UploadBox />
			</div>
		);
	}
}

module.exports = JSTools;

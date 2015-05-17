const React = require("react");

const AccordionBox = require("./docs/AccordionBox");
const AutocompleteBox = require("./docs/AutocompleteBox");
const DropdownBox = require("./docs/DropdownBox");
const FilterBox = require("./docs/FilterBox");
const InfiniteScrollBox = require("./docs/InfiniteScrollBox");
const LivesearchBox = require("./docs/LivesearchBox");
const ModalBox = require("./docs/ModalBox");
const ProgressBarBox = require("./docs/ProgressBarBox");
const TabBox = require("./docs/TabBox");
const TooltipBox = require("./docs/TooltipBox");
const TextFitBox = require("./docs/TextFitBox");
const UploadBox = require("./docs/UploadBox");

class JSTools extends React.Component {
	shiftWindow() {
		window.scrollBy(0, -60); //dirty fix for anchor links problem with fixed header
  }

	componentWillMount() {
		window.addEventListener("hashchange", this.shiftWindow);
	}

	componentDidMount() {
		if (location.hash) { this.shiftWindow(); }
	}

	componentWillUnmount(){
		window.removeEventListener("hashchange", this.shiftWindow);
	}
	
	render() {
		return (
			<div id="tab3">
				<AccordionBox />
				<AutocompleteBox />
				<DropdownBox />
				<FilterBox />
				<InfiniteScrollBox />
				<LivesearchBox />
				<ModalBox />
				<ProgressBarBox />
				<TabBox />
				<TextFitBox />
				<TooltipBox />
				<UploadBox />
			</div>
		);
	}
}

module.exports = JSTools;

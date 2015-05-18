import React from "react";

import AccordionBox from "./docs/AccordionBox";
import AutocompleteBox from "./docs/AutocompleteBox";
import DropdownBox from "./docs/DropdownBox";
import FilterBox from "./docs/FilterBox";
import InfiniteScrollBox from "./docs/InfiniteScrollBox";
import LivesearchBox from "./docs/LivesearchBox";
import ModalBox from "./docs/ModalBox";
import ProgressBarBox from "./docs/ProgressBarBox";
import TabBox from "./docs/TabBox";
import TooltipBox from "./docs/TooltipBox";
import TextFitBox from "./docs/TextFitBox";
import UploadBox from "./docs/UploadBox";

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

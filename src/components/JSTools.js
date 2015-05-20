import React from "react";

import AccordionBox from "./docs/AccordionBox";
import AutocompleteBox from "./docs/AutocompleteBox";
import CheckAllBox from "./docs/CheckAllBox";
import DropdownBox from "./docs/DropdownBox";
import FilterBox from "./docs/FilterBox";
import Grid from "./lib/Grid";
import GridItem from "./lib/GridItem";
import InfiniteScrollBox from "./docs/InfiniteScrollBox";
import Label from "./lib/Label";
import LivesearchBox from "./docs/LivesearchBox";
import ModalBox from "./docs/ModalBox";
import Navigation from "./lib/Navigation";
import NavigationBar from "./lib/NavigationBar";
import NavigationItem from "./lib/NavigationItem";
import NotificationBox from "./docs/NotificationBox";
import ProgressBarBox from "./docs/ProgressBarBox";
import TabBox from "./docs/TabBox";
import TextFitBox from "./docs/TextFitBox";
import ToggleButtonBox from "./docs/ToggleButtonBox";
import TooltipBox from "./docs/TooltipBox";
import UploadBox from "./docs/UploadBox";

class JSTools extends React.Component {

	render() {
		return (
			<div id="tab3">
				<Grid>
					<GridItem id="side" size={20}>
						<Label className="hide-on-mobile" color="black" style={{marginBottom: "10px", fontSize: "1em"}} >JS Tools</Label><br/>
						<Navigation id="side-nav" menuLabel="JS Tools" responsive>
							<NavigationBar hideOnMobile vertical>
								<NavigationItem url="#accordionBox"> Accordion </NavigationItem>
								<NavigationItem url="#autocompleteBox"> Autocomplete </NavigationItem>
								<NavigationItem url="#checkAllBox"> Check All </NavigationItem>
								<NavigationItem url="#dropdownBox"> Dropdown </NavigationItem>
								<NavigationItem url="#filterBox"> Filterbox </NavigationItem>
								<NavigationItem url="#infiniteScrollBox"> Infinite Scroll </NavigationItem>
								<NavigationItem url="#livesearchBox"> Livesearch </NavigationItem>
								<NavigationItem url="#modalBox"> Modal </NavigationItem>
								<NavigationItem url="#notificationBox"> Notifications </NavigationItem>
								<NavigationItem url="#progressBarBox"> Progressbar </NavigationItem>
								<NavigationItem url="#tabsBox"> Tabs </NavigationItem>
								<NavigationItem url="#textFitBox"> TextFit </NavigationItem>
								<NavigationItem url="#toggleButtonsBox"> Toggle Buttons </NavigationItem>
								<NavigationItem url="#tooltipBox"> Tooltip </NavigationItem>
								<NavigationItem url="#uploadBox"> Upload </NavigationItem>
							</NavigationBar>
						</Navigation>
					</GridItem>
					<GridItem size={80}>
						<AccordionBox />
						<AutocompleteBox />
						<CheckAllBox />
						<DropdownBox />
						<FilterBox />
						<InfiniteScrollBox />
						<LivesearchBox />
						<ModalBox />
						<NotificationBox />
						<ProgressBarBox />
						<TabBox />
						<TextFitBox />
						<ToggleButtonBox />
						<TooltipBox />
						<UploadBox />
					</GridItem>
				</Grid>
			</div>
		);
	}
}

module.exports = JSTools;

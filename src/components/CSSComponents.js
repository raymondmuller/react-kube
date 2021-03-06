import React from "react";

import Navigation from "./lib/Navigation";
import NavigationBar from "./lib/NavigationBar";
import NavigationItem from "./lib/NavigationItem";
import Grid from "./lib/Grid";
import GridItem from "./lib/GridItem";
import Label from "./lib/Label";
import TypographyBox from "./docs/TypographyBox";
import GridBox from "./docs/GridBox";
import BlockBox from "./docs/BlockBox";
import TableBox from "./docs/TableBox";
import LabelBox from "./docs/LabelBox";
import SearchBox from "./docs/SearchBox";
import ButtonBox from "./docs/ButtonBox";
import FormBox from "./docs/FormBox";
import NavigationBox from "./docs/NavigationBox";
import IconBox from "./docs/IconBox";
import VideoBox from "./docs/VideoBox";

class CSSComponents extends React.Component {

	render() {
		return (
			<div id="tab2">
			<Grid>
				<GridItem id="side" size={20}>
					<Label className="hide-on-mobile" color="black" style={{marginBottom: "10px", fontSize: "1em"}} >CSS Components</Label><br/>
					<Navigation id="side-nav" menuLabel="CSS Components" responsive>
						<NavigationBar hideOnMobile vertical>
							<NavigationItem url="#blockBox"> Blocks </NavigationItem>
							<NavigationItem url="#buttonBox"> Buttons </NavigationItem>
							<NavigationItem url="#formBox"> Form </NavigationItem>
							<NavigationItem url="#gridBox"> Grid </NavigationItem>
							<NavigationItem url="#iconBox"> Icon </NavigationItem>
							<NavigationItem url="#labelBox"> Label </NavigationItem>
							<NavigationItem url="#navigationBox"> Navigation </NavigationItem>
							<NavigationItem url="#searchBox"> Search </NavigationItem>
							<NavigationItem url="#tableBox"> Table </NavigationItem>
							<NavigationItem url="#typographyBox"> Typhography </NavigationItem>
							<NavigationItem url="#videoBox"> Video player </NavigationItem>
						</NavigationBar>
					</Navigation>
				</GridItem>
					<GridItem size={80}>
						<BlockBox />
						<ButtonBox />
						<FormBox />
						<GridBox />
						<IconBox />
						<LabelBox />
						<NavigationBox />
						<SearchBox />
						<TableBox />
						<TypographyBox />
						<VideoBox />
					</GridItem>
				</Grid>
			</div>
		);
	}
}

module.exports = CSSComponents;

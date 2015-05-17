const React = require("react");

const Navigation = require("./lib/Navigation");
const NavigationBar = require("./lib/NavigationBar");
const NavigationItem = require("./lib/NavigationItem");
const Grid = require("./lib/Grid");
const GridItem = require("./lib/GridItem");
const Label = require("./lib/Label");
const TypographyBox = require("./docs/TypographyBox");
const GridBox = require("./docs/GridBox");
const BlockBox = require("./docs/BlockBox");
const TableBox = require("./docs/TableBox");
const LabelBox = require("./docs/LabelBox");
const SearchBox = require("./docs/SearchBox");
const ButtonBox = require("./docs/ButtonBox");
const FormBox = require("./docs/FormBox");
const NavigationBox = require("./docs/NavigationBox");
const NotificationBox = require("./docs/NotificationBox");
const IconBox = require("./docs/IconBox");

class CSSComponents extends React.Component {

	componentWillMount() {
		window.addEventListener("hashchange", function() { scrollBy(0, -75); });
	}

	componentWillUnmount(){
		window.removeEventListener("hashchange", function() { scrollBy(0, -75); });
	}

	render() {
		return (
			<div id="tab2">
			<Grid>
				<GridItem id="side" size={25}>
					<Label color="black" className="hide-on-mobile" style={{marginBottom: "10px", fontSize: "1em"}} >CSS Components</Label><br/>
					<Navigation id="side-nav" responsive menuLabel="CSS Components">
						<NavigationBar hideOnMobile vertical>
							<NavigationItem url="#blockBox"> Blocks </NavigationItem>
							<NavigationItem url="#buttonBox"> Buttons </NavigationItem>
							<NavigationItem url="#formBox"> Form </NavigationItem>
							<NavigationItem url="#gridBox"> Grid </NavigationItem>
							<NavigationItem url="#iconBox"> Icon </NavigationItem>
							<NavigationItem url="#labelBox"> Label </NavigationItem>
							<NavigationItem url="#navigationBox"> Navigation </NavigationItem>
							<NavigationItem url="#notificationBox"> Notification </NavigationItem>
							<NavigationItem url="#searchBox"> Search </NavigationItem>
							<NavigationItem url="#tableBox"> Table </NavigationItem>
							<NavigationItem url="#typographyBox"> Typhography </NavigationItem>
						</NavigationBar>
					</Navigation>
				</GridItem>
					<GridItem size={75}>
						<BlockBox />
						<ButtonBox />
						<FormBox />
						<GridBox />
						<IconBox />
						<LabelBox />
						<NavigationBox />
						<NotificationBox />
						<SearchBox />
						<TableBox />
						<TypographyBox />
					</GridItem>
				</Grid>
			</div>
		);
	}
}

module.exports = CSSComponents;

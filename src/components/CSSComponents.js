const React = require("react");

const TypographyBox = require("./CSS/TypographyBox");
const GridBox = require("./CSS/GridBox");
const BlockBox = require("./CSS/BlockBox");
const TableBox = require("./CSS/TableBox");
const LabelBox = require("./CSS/LabelBox");
const SearchBox = require("./CSS/SearchBox");
const ButtonBox = require("./CSS/ButtonBox");
const FormBox = require("./CSS/FormBox");
const NavigationBox = require("./CSS/NavigationBox");

const NotificationBox = require("./CSS/NotificationBox");
const IconBox = require("./CSS/IconBox");

class CSSComponents extends React.Component {

	render() {

		return (
			<div id="tab2">
				<TypographyBox />
				<GridBox />
				<BlockBox />
				<TableBox />
				<LabelBox />
				<FormBox />
				<NavigationBox />
				<ButtonBox />
				<SearchBox />
				<NotificationBox />
				<IconBox />
			</div>
		);
	}
}

module.exports = CSSComponents;

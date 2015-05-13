const React = require("react");

const TypographyBox = require("./css/TypographyBox");
const GridBox = require("./css/GridBox");
const BlockBox = require("./css/BlockBox");
const TableBox = require("./css/TableBox");
const LabelBox = require("./css/LabelBox");
const SearchBox = require("./css/SearchBox");
const ButtonBox = require("./css/ButtonBox");
const FormBox = require("./css/FormBox");
const NavigationBox = require("./css/NavigationBox");

const NotificationBox = require("./css/NotificationBox");
const IconBox = require("./css/IconBox");

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

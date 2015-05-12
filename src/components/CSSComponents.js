const React = require("react");
const FormSection = require("./Lib/FormSection");
const Grid = require("./Lib/Grid");
const GridItem = require("./Lib/GridItem");
const Blocks = require("./Lib/Blocks");
const Block = require("./Lib/Block");

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

const Message = require("./Lib/Message");
const Button = require("./Lib/Button");
const LinkButton = require("./Lib/LinkButton");
const SubmitButton = require("./Lib/SubmitButton");

const Pagination = require("./Lib/Pagination");
const PaginationItem = require("./Lib/PaginationItem");


class CSSComponents extends React.Component {

	render() {

		return(
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
		)
	}

}

module.exports = CSSComponents;
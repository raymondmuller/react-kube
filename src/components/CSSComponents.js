const React = require("react");

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

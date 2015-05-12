const React = require("react");
const FormSection = require("./Lib/FormSection");
const Grid = require("./Lib/Grid");
const GridItem = require("./Lib/GridItem");
const Blocks = require("./Lib/Blocks");
const Block = require("./Lib/Block");

const GridBox = require("./CSS/GridBox");
const BlockBox = require("./CSS/BlockBox");
const TableBox = require("./CSS/TableBox");
const LabelBox = require("./CSS/LabelBox");

const ButtonBox = require("./CSS/ButtonBox");

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
				<FormSection name="Typography">
							<Grid>
								<p>No React stuff going on here, please refer to the</p>
								<LinkButton color="blue" url="http://imperavi.com/kube/css/typography/" target="new">Official Kube Documentation</LinkButton>
							</Grid>
						</FormSection> 

				<GridBox />
				<BlockBox />
				<TableBox />
				<LabelBox />

				<FormSection name="Forms">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<NavigationBox />

				<ButtonBox />

				<FormSection name="Search">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<NotificationBox />

				<FormSection name="Helpers">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<IconBox />
		</div>
		)
	}

}

module.exports = CSSComponents;
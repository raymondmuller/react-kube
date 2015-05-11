const React = require("react");
const FormSection = require("./Lib/FormSection");
const Grid = require("./Lib/Grid");
const GridItem = require("./Lib/GridItem");
const Blocks = require("./Lib/Blocks");
const Block = require("./Lib/Block");

const GridBox = require("./CSS/GridBox");
const BlockBox = require("./CSS/BlockBox");
const TableBox = require("./CSS/TableBox");

const Message = require("./Lib/Message");
const Button = require("./Lib/Button");
const LinkButton = require("./Lib/LinkButton");
const SubmitButton = require("./Lib/SubmitButton");

const Pagination = require("./Lib/Pagination");
const PaginationItem = require("./Lib/PaginationItem");


class CSSComponents extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showMessage: false
		}
	}

	handleShowMessage() {
		console.log("show message")
		this.setState({
			showMessage: true
		});
	}

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

				<FormSection name="Forms">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<FormSection name="Navigation">
					<Grid>
						<GridItem size={50}>
							<Pagination>
								<PaginationItem> hi </PaginationItem>
								<PaginationItem> yo </PaginationItem>
							</Pagination>
						</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<FormSection name="Buttons">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<FormSection name="Labels">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<FormSection name="Search">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<FormSection name="Notifications">
					<FormSection name="Messages">
						<Blocks amount={2}>
							<Block>
								<Message id="message-1" show={true} position="relative" color="blue">This is a message </Message>
								<br/>
								<hr/>
								<Message id="message-2" show={this.state.showMessage} color="yellow">Click </Message>
								<Button onClick={this.handleShowMessage.bind(this)} color="green">Show Message</Button>
							</Block>
							<Block>
								//TODO - Code sample
							</Block>
						</Blocks>
					</FormSection>
					<FormSection name="Alerts">
						<Grid>
							<GridItem size={50}>Preview here</GridItem>
							<GridItem size={50}>//TODO - Code sample</GridItem>
						</Grid>
					</FormSection>
				</FormSection>

				<FormSection name="Helpers">
					<Grid>
						<GridItem size={50}>Preview here</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>

				<FormSection name="Icons">
					<Grid>
						<GridItem size={50}>
							For now you can (only) add items to buttons. I will extend this functionality to more components later:
							<br/>
							<Button icon="github"> Github</Button>
							<Button color="blue" icon="facebook"> Facebook</Button>
						</GridItem>
						<GridItem size={50}>//TODO - Code sample</GridItem>
					</Grid>
				</FormSection>
		</div>
		)
	}

}

module.exports = CSSComponents;
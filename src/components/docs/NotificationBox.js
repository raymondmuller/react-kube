const React = require("react");
const FormSection = require("../lib/FormSection");
const Blocks = require("../lib/Blocks");
const Block = require("../lib/Block");
const Message = require("../lib/Message");
const Alert = require("../lib/Alert");
const Button = require("../lib/Button");
const Highlight = require("react-highlight");

class NotificationBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showMessage: false
		};
	}

	handleShowMessage() {
		this.setState({
			showMessage: true
		});
	}

	render() {
		return (
			<FormSection name="Notifications">
				<FormSection name="Messages">
					<Blocks amount={2}>
						<Block>
							<Message color="blue" id="message-1" position="relative" show={true} >This is a message </Message>
							<br/>
							<hr/>
							<Message color="yellow" id="message-2" show={this.state.showMessage} >Click </Message>
							<Button color="green" onClick={this.handleShowMessage.bind(this)} >Show Message</Button>
						</Block>
						<Block className="demo">
							<Highlight className="javascript">
								{"<Message color=\"blue\" position=\"relative\" show={true}> I am a simple alert </Message>"}
							</Highlight>
							<p> Conditionally show/hide message </p>
							<Highlight className="javascript">
								{"<Message show={this.state.showMessage}> Click me </Alert>"}
							</Highlight>
						</Block>
					</Blocks>
				</FormSection>
				<FormSection name="Alerts">
					<Blocks amount={2}>
						<Block>
							<Alert>I am a simple alert</Alert><br/>
							<Alert color="yellow">Warning!</Alert><br/>
							<Alert color="red" remove>Error! (I can be removed, since I have the "remove" attribute)</Alert>
							<Alert color="green">Success</Alert>
						</Block>
						<Block className="demo">
							<Highlight className="javascript">
								{"<Alert> I am a simple alert </Alert>"}
							</Highlight>
							<Highlight className="javascript">
								{"<Alert color=\"yellow\"> I am a warning </Alert>"}
							</Highlight>
							<Highlight className="javascript">
								{"<Alert color=\"red\" remove> Error! </Alert>"}
							</Highlight>
							<Highlight className="javascript">
								{"<Alert color=\"green\"> Success! </Alert>"}
							</Highlight>
						</Block>
					</Blocks>
				</FormSection>
			</FormSection>
		);
	}
}

module.exports = NotificationBox;

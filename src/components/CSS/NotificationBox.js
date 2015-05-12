const React = require("react");
const FormSection = require("../Lib/FormSection");
const Blocks = require("../Lib/Blocks");
const Block = require("../Lib/Block");
const Message = require("../Lib/Message");
const Alert = require("../Lib/Alert");
const Button = require("../Lib/Button");

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
						<Block>
							//TODO - Code sample and fix independent states
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
						<Block size={50}>//TODO - Code sample</Block>
					</Blocks>
				</FormSection>
			</FormSection>
		);
	}
}

module.exports = NotificationBox;

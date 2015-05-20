import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Message from "../lib/Message";
import Alert from "../lib/Alert";
import Button from "../lib/Button";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class NotificationBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showDelayedMessage: false,
			showMessage: false,
			showRelativeMessage: true
		};
	}

	handleCloseRelativeMessage() {
		this.setState({
			showRelativeMessage: false
		});
	}

	handleShowNormalMessage() {
		this.setState({
			showMessage: true
		});
	}

	handleCloseNormalMessage() {
		this.setState({
			showMessage: false
		});
	}

	handleShowDelayedMessage() {
		this.setState({
			showDelayedMessage: true
		});
	}

	handleCloseDelayedMsg() {
		this.setState({
			showDelayedMessage: false
		});
	}

	render() {
		return (
			<FormSection id="notificationBox" name="Notifications">
				<FormSection name="Messages">
					<Grid>
						<Message color="blue" id="message-1" onHide={this.handleCloseRelativeMessage.bind(this)} position="relative" show={this.state.showRelativeMessage} >This is a message </Message>
						<CodeSample>
							{"<Message color=\"blue\" position=\"relative\" show={this.state.showRelativeMessage}> I am a simple alert </Message>"}
						</CodeSample>
						<p> Conditionally show/hide message </p>
						<Message color="yellow" id="message-2" onHide={this.handleCloseNormalMessage.bind(this)} show={this.state.showMessage} >Click </Message>
						<Button color="green" onClick={this.handleShowNormalMessage.bind(this)} >Show Message</Button>
						<CodeSample>
							{"<Message show={this.state.showMessage}> Click me </Alert>"}
						</CodeSample>
						<Message color="blue" delay={2000} id="message-2" onHide={this.handleCloseDelayedMsg.bind(this)} show={this.state.showDelayedMessage} >I will close in 2 secs </Message>
						<Button color="black" onClick={this.handleShowDelayedMessage.bind(this)} outline>Show Delayed Message</Button><br/>
						<hr/>
						<CodeSample noLines>
							{"<Message delay=\"2000\" show={this.state.showMessage}> Click me </Alert>"}
						</CodeSample>
						<PropTable title="MESSAGE: AVAILABLE PROPS">
					<Prop description="Bottom style value (e.g 200)" name="bottom" type="number" />
					<Prop description="CSS class" name="className" type="string" />
					<Prop description="black|blue|red|yellow|green" name="color" type="string" />
					<Prop description="Auto close message on delay (in milliseconds, e.g. 2000)" name="delay" type="number" />
					<Prop description="Left style value (e.g 200)" name="left" type="number" />
					<Prop description="onHide callback fn" name="onHide" type="function" />
					<Prop description="onShow callback fn" name="onShow" type="function" />
					<Prop default="absolute" description="Position style value (e.g. 'realtive')" name="position" type="string" />
					<Prop description="Right style value (e.g 200)" name="right" type="number" />
					<Prop default="false" description="show modal" name="show" type="boolean" />
					<Prop description="Style attribute" name="style" type="object" />
					<Prop description="Top style value (e.g 200)" name="top" type="number" />
				</PropTable>
					</Grid>
				</FormSection>
				<FormSection name="Alerts">
					<Grid>
						<Alert>I am a simple alert</Alert>
						<CodeSample>
							{"<Alert> I am a simple alert </Alert>"}
						</CodeSample>
						<Alert color="yellow">Warning!</Alert>
						<CodeSample>
							{"<Alert color=\"yellow\"> I am a warning </Alert>"}
						</CodeSample>
						<Alert color="red" remove>Error! (I can be removed, since I have the "remove" attribute)</Alert>
						<CodeSample>
							{"<Alert color=\"red\" remove> Error! </Alert>"}
						</CodeSample>
						<Alert color="green">Success</Alert>
						<hr/>
						<CodeSample noLines>
							{"<Alert color=\"green\"> Success! </Alert>"}
						</CodeSample>
						<PropTable title="ALERT: AVAILABLE PROPS">
							<Prop description="CSS class" name="className" type="string" />
							<Prop description="black|blue|red|yellow|green" name="color" type="string" />
							<Prop default="false" description="Outlined alert" name="outline" type="boolean" />
							<Prop default="false" description="Add cross to delete alert" name="remove" type="boolean" />
							<Prop description="Style attribute" name="style" type="object" />
						</PropTable>
					</Grid>
				</FormSection>
			</FormSection>
		);
	}
}

module.exports = NotificationBox;

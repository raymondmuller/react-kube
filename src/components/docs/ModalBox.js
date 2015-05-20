import React from "react";

import Button from "../lib/Button";
import Modal from "../lib/Modal";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class ModalBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	handleShowModal() {
		this.setState({
			showModal: true
		});
	}

	render() {
		return (
			<FormSection id="modalBox" name="Modal">
				<Grid>
						<Button color="green" onClick={this.handleShowModal.bind(this)}>Show Modal</Button>
						<Modal padding="30px" show={this.state.showModal} title="Modal Title" >
							<hr/>
							<p> Lorem ipsum.... </p>
						</Modal>
						<hr/>
						<CodeSample noLines>
							{"<Modal padding=\"30px\" show=\"{this.state.showModal}\" title=\"Modal Title\">"}<br/>
							&emsp;&emsp;{"<p>Lorem ipsum....</p>"}<br/>
							{"</Modal>"}<br/>
						</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="CSS class for the modal's content" name="contentClassName" type="string" />
						<Prop description="onClose callback fn" name="onClose" type="function" />
						<Prop description="onShow callback fn" name="onShow" type="function" />
						<Prop default="50px" description="set padding (e.g. '10px')" name="padding" type="string" />
						<Prop default="false" description="Show modal?" name="show" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop description="Title of the modal" name="title" type="string" />
						<Prop description="CSS class for the modal's title" name="titleClassName" type="string" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ModalBox;

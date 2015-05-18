import React from "react";

import Button from "../lib/Button";
import Modal from "../lib/Modal";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Highlight from "react-highlight";

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
					<GridItem size={50}>
						<Button color="green" onClick={this.handleShowModal.bind(this)}>Show Modal</Button>
						<Modal padding="30px" show={this.state.showModal} title="Modal Title" >
							<hr/>
							<p> Lorem ipsum.... </p>
						</Modal>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Modal padding=\"30px\" show=\"{this.state.showModal}\" title=\"Modal Title\">"}<br/>
							&emsp;&emsp;{"<p>Lorem ipsum....</p>"}<br/>
							{"</Modal>"}<br/>
						</Highlight>
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ModalBox;

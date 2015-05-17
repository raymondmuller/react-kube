const React = require("react");

const Button = require("../lib/Button");
const Modal = require("../lib/Modal");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

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
						<Modal show={this.state.showModal} title="Modal Title" padding="30px">
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

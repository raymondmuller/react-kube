import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Input from "../lib/Input";
import Button from "../lib/Button";
import ToggleButtons from "../lib/ToggleButtons";
import Highlight from "react-highlight";

class ToggleButtonBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonColor: "red",
			buttonText: "OFF",
			selectedValue: "",
			selectedSegmentedValue: [],
			selectedSingleValue: "0"
		};
	}

	handleToggle(value) {
		this.setState({
			selectedValue: value
		});
	}

	handleSegmentedToggle(value) {
		this.setState({
			selectedSegmentedValue: value
		});
	}

	handleSingleToggle(value) {
		let newValue = value === "1" ? "0" : "1";
		let buttonText = newValue === "1" ? "ON" : "OFF";
		let buttonColor = newValue === "1" ? "green" : "red";
		this.setState({
			buttonColor: buttonColor,
			buttonText: buttonText,
			selectedSingleValue: value
		});
	}

	render() {
		return (
			<FormSection id="toggleButtonsBox" name="Toggle Buttons">
				<Grid>
					<GridItem size={50}>
						<p> Selected value : {this.state.selectedValue} </p>
						<ToggleButtons active="off" onToggle={this.handleToggle.bind(this)}>
							<Button value="on">On</Button>
							<Button value="off">Off</Button>
						</ToggleButtons>
						<br/><br/><hr/>
						<Input value={this.state.selectedValue} />
						<br/><br/><hr/>
						<p>Segmented</p>
						<ToggleButtons onToggle={this.handleSegmentedToggle.bind(this)} segmented>
							<Button value="S">S</Button>
							<Button value="M">M</Button>
							<Button value="L">L</Button>
						</ToggleButtons>
						<br/><br/>
						<Input value={this.state.selectedSegmentedValue.join(", ")} />
						<br/><br/><hr/>
						<p>Single Toggle</p>
						<ToggleButtons onToggle={this.handleSingleToggle.bind(this)} single>
							<Button value="0" color={this.state.buttonColor}>{this.state.buttonText}</Button>
						</ToggleButtons>
						<br/><br/>
						<p>value = {this.state.selectedSingleValue} - color = {this.state.buttonColor} - text = {this.state.buttonText}</p>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<ToggleButtons active=\"off\" onToggle={this.handleToggle.bind(this)}>"}<br/>
							&emsp;&emsp;{"<Button value=\"on\">On</Button>"}<br/>
							&emsp;&emsp;{"<Button value=\"off\">Off</Button>"}<br/>
							{"</ToggleButtons>"}
						</Highlight>
						<Highlight className="javascript">
							{"<ToggleButtons onToggle={this.handleSegmentedToggle.bind(this)} segmented>"}<br/>
							&emsp;&emsp;{"<Button value=\"S\">S</Button>"}<br/>
							&emsp;&emsp;{"<Button value=\"M\">M</Button>"}<br/>
							&emsp;&emsp;{"<Button value=\"L\">L</Button>"}<br/>
						{"</ToggleButtons>"}
						</Highlight>
						<hr/>
						<p> Single toggle code needs to be cleaner and is subjective to change in the near future </p>
						<Highlight className="javascript">
							{"<ToggleButtons onToggle={this.handleSingleToggle.bind(this)} single>"}<br/>
								&emsp;&emsp;{"<Button value=\"0\" color=\"" + this.state.buttonColor + "\">" + this.state.buttonText + "</Button>"}<br/>
							{"</ToggleButtons>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ToggleButtonBox;

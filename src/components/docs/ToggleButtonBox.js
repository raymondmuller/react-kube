import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Input from "../lib/Input";
import Button from "../lib/Button";
import ToggleButtons from "../lib/ToggleButtons";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

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
					<p> Selected value : {this.state.selectedValue} </p>
					<ToggleButtons active="off" onToggle={this.handleToggle.bind(this)}>
						<Button value="on">On</Button>
						<Button value="off">Off</Button>
					</ToggleButtons>
					<br/><br/><hr/>
					<Input value={this.state.selectedValue} />
					<CodeSample>
						{"<ToggleButtons active=\"off\" onToggle={this.handleToggle.bind(this)}>"}<br/>
						&emsp;&emsp;{"<Button value=\"on\">On</Button>"}<br/>
						&emsp;&emsp;{"<Button value=\"off\">Off</Button>"}<br/>
						{"</ToggleButtons>"}
					</CodeSample>
					<p>Segmented</p>
					<ToggleButtons onToggle={this.handleSegmentedToggle.bind(this)} segmented>
						<Button value="S">S</Button>
						<Button value="M">M</Button>
						<Button value="L">L</Button>
					</ToggleButtons>
					<br/><br/>
					<Input value={this.state.selectedSegmentedValue.join(", ")} />
					<CodeSample>
						{"<ToggleButtons onToggle={this.handleSegmentedToggle.bind(this)} segmented>"}<br/>
						&emsp;&emsp;{"<Button value=\"S\">S</Button>"}<br/>
						&emsp;&emsp;{"<Button value=\"M\">M</Button>"}<br/>
						&emsp;&emsp;{"<Button value=\"L\">L</Button>"}<br/>
					{"</ToggleButtons>"}
					</CodeSample>
					<p>Single Toggle</p>
					<ToggleButtons onToggle={this.handleSingleToggle.bind(this)} single>
						<Button color={this.state.buttonColor} value="0">{this.state.buttonText}</Button>
					</ToggleButtons>
					<br/><br/>
					<p>value = {this.state.selectedSingleValue} - color = {this.state.buttonColor} - text = {this.state.buttonText}</p>
					<hr/>
					<CodeSample noLines>
						{"<ToggleButtons onToggle={this.handleSingleToggle.bind(this)} single>"}<br/>
							&emsp;&emsp;{"<Button value=\"0\" color=\"" + this.state.buttonColor + "\">" + this.state.buttonText + "</Button>"}<br/>
						{"</ToggleButtons>"}
					</CodeSample>
					<p> Single toggle code needs to be cleaner and is subjective to change in the near future </p>
					<PropTable>
						<Prop description="Set active button (index of)" name="active" type="string or number" />
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="onToggle callback fn (passes value)" name="onToggle" type="function" />
						<Prop default="false" description="Segmented toggle buttons (multiple values possible)" name="segmented" type="boolean" />
						<Prop default="false" description="Single toggle button?" name="single" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ToggleButtonBox;

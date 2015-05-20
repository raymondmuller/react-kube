import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Button from "../lib/Button";
import Tooltip from "../lib/Tooltip";
import Select from "../lib/Select";
import SelectOption from "../lib/SelectOption";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class TooltipBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {tooltipPlacement: "bottom", color: "red"};
	}

	handleColorChange(e) {
		this.setState({
			color: e.target.value
		});
	}

	handlePlacementChange(e) {
		this.setState({
			tooltipPlacement: e.target.value
		});
	}

	render() {
		return (
			<FormSection id="tooltipBox" name="Tooltip">
				<Grid>
					<Select description="color" id="tooltipSelect" onChange={this.handleColorChange.bind(this)}>
						<SelectOption value="red">red</SelectOption>
						<SelectOption value="blue">blue</SelectOption>
						<SelectOption value="green">green</SelectOption>
						<SelectOption value="yellow">yellow</SelectOption>
						<SelectOption value="black">black</SelectOption>
						<SelectOption value="white">white</SelectOption>
					</Select>
					<span> - </span>
					<Select id="tooltipSelect" onChange={this.handlePlacementChange.bind(this)}>
						<SelectOption value="bottom">bottom</SelectOption>
						<SelectOption value="top">top</SelectOption>
						<SelectOption value="left">left</SelectOption>
						<SelectOption value="right">right</SelectOption>
					</Select><br/><br/><br/>
					<Tooltip color={this.state.color} placement={this.state.tooltipPlacement} text="I am a tooltip">
						<Button color="blue">Button</Button>
					</Tooltip>

					<CodeSample>
						{"Tooltip color=\""}
						{this.state.color}{"\" placement=\""}{this.state.tooltipPlacement}{"\" text=\"I am a tooltip\">"}<br/>
						&emsp;&emsp;{"<Button color=\"blue\">Button</Button>"}<br/>
						{"</Tooltip>"}
					</CodeSample>

					<Tooltip color={this.state.color} placement={this.state.tooltipPlacement} text="I am a tooltip">
						<span>Just a line of text</span>
					</Tooltip>
					<hr/>
					<CodeSample noLines>
						{"Tooltip color=\""}
						{this.state.color}{"\" placement=\""}{this.state.tooltipPlacement}{"\" text=\"I am a tooltip\">"}<br/>
						&emsp;&emsp;{"<span> Just a line of text </span>"}<br/>
						{"</Tooltip>"}
					</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="blue|red|yellow|green|white" name="color" type="string" />
						<Prop default="bottom" description="top|right|left|bottom" name="placement" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop description="Tooltip text" name="text" required="yes" type="string" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TooltipBox;

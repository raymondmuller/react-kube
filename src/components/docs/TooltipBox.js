import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Button from "../lib/Button";
import Tooltip from "../lib/Tooltip";
import Select from "../lib/Select";
import SelectOption from "../lib/SelectOption";
import Highlight from "react-highlight";

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
					<GridItem size={50}>
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
						</Tooltip><br/><br/><br/>
						<Tooltip color={this.state.color} placement={this.state.tooltipPlacement} text="I am a tooltip">
							<span>Just a line of text</span>
						</Tooltip>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
						{"Tooltip color=\""}
						{this.state.color}{"\" placement=\""}{this.state.tooltipPlacement}{"\" text=\"I am a tooltip\">"}<br/>
						&emsp;&emsp;{"<Button color=\"blue\">Button</Button>"}<br/>
						{"</Tooltip>"}
						</Highlight><br/>
						<Highlight className="javascript">
						{"Tooltip color=\""}
						{this.state.color}{"\" placement=\""}{this.state.tooltipPlacement}{"\" text=\"I am a tooltip\">"}<br/>
						&emsp;&emsp;{"<span> Just a line of text </span>"}<br/>
						{"</Tooltip>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TooltipBox;

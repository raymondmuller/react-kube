import React from "react";

import Button from "../lib/Button";
import ProgressBar from "../lib/ProgressBar";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class ProgressBarBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0
		};
	}

	handleIncreaseProgress() {
		this.setState({
			progress: this.state.progress += 10
		});
	}

	handleDecreaseProgress() {
		this.setState({
			progress: this.state.progress -= 10
		});
	}

	render() {
		return (
			<FormSection id="progressBarBox" name="ProgressBar">
				<Grid>
					<Button color="green" onClick={this.handleIncreaseProgress.bind(this)}>Increase Progress +10</Button><br/><br/>
					<Button color="red" onClick={this.handleDecreaseProgress.bind(this)}>Decrease Progress -10</Button>
					<br/>
					<ProgressBar progress={this.state.progress}/>
					<hr/>
					<CodeSample noLines>
						{"<Button color=\"green\" onClick={this.handleIncreaseProgress.bind(this)}>Increase Progress +10</Button>"}<br/>
						{"<Button color=\"red\" onClick={this.handleDecreaseProgress.bind(this)}>Decrease Progress -10</Button>"}<br/><br/>
						{"<ProgressBar progress=\""}{this.state.progress}{"\" />"}
					</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop default="#1a52a5" description="Set the (background) color of the progressbar" name="color" type="string" />
						<Prop description="Progress width (e.g. 10, 20, 50, 100)" name="progress" type="number" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ProgressBarBox;

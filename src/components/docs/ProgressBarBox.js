import React from "react";

import Button from "../lib/Button";
import ProgressBar from "../lib/ProgressBar";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Highlight from "react-highlight";

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
					<GridItem size={50}>
						<Button color="green" onClick={this.handleIncreaseProgress.bind(this)}>Increase Progress +10</Button><br/><br/>
						<Button color="red" onClick={this.handleDecreaseProgress.bind(this)}>Decrease Progress -10</Button>
						<ProgressBar progress={this.state.progress}/>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Button color=\"green\" onClick={this.handleIncreaseProgress.bind(this)}>Increase Progress +10</Button>"}<br/>
							{"<Button color=\"red\" onClick={this.handleDecreaseProgress.bind(this)}>Decrease Progress -10</Button>"}<br/><br/>
							{"<ProgressBar progress=\""}{this.state.progress}{"\" />"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = ProgressBarBox;

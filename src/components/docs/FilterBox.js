import React from "react";

import Filterbox from "../lib/Filterbox";
import FormSection from "../lib/FormSection";
import FormList from "../lib/FormList";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Highlight from "react-highlight";

class FilterBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {selected: ""};
	}

	handleChange(item) {
		this.setState({
			selected: item
		});
	}

	render() {
		return (
			<FormSection id="filterBoxBox" name="Filterbox">
				<Grid>
					<GridItem size={50}>
						<FormList>
							<p>Selected value: {this.state.selected}</p><hr/>
							<Filterbox data={["Apple", "Banana", "Bread", "Cheese"]} onChange={this.handleChange.bind(this)} />
							<br/>
						</FormList>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Filterbox data={[\"Apple\", \"Banana\", \"Bread\", \"Cheese\"]} onChange={this.handleChange.bind(this)} />"}<br/>
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = FilterBox;

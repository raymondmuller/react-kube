import React from "react";

import Filterbox from "../lib/Filterbox";
import FormSection from "../lib/FormSection";
import FormList from "../lib/FormList";
import Grid from "../lib/Grid";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

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
			<FormSection id="filterBox" name="Filterbox">
				<Grid>
					<FormList>
						<p>Selected value: {this.state.selected}</p><hr/>
						<Filterbox data={["Apple", "Banana", "Bread", "Cheese"]} onChange={this.handleChange.bind(this)} />
						<br/>
					</FormList>
					<hr/>
					<CodeSample noLines>
						{"<Filterbox data={[\"Apple\", \"Banana\", \"Bread\", \"Cheese\"]} onChange={this.handleChange.bind(this)} />"}<br/>
					</CodeSample>
					<PropTable>
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="The options for the dropdown in an array" name="data" required="yes" type="array" />
						<Prop description="The id attribute" name="id" type="string" />
						<Prop description="Class attribute of the input field" name="inputClassName" type="string" />
						<Prop description="Class attribute of the list" name="listClassName" type="string" />
						<Prop description="onChange callback fn (passes value)" name="onChange" type="function" />
						<Prop description="Input placeholder value" name="placeholder" type="string" />
						<Prop default="false" description="Is the input required?" name="required" type="boolean" />
						<Prop default="false" description="Show dropdown on load?" name="show" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop description="Class attribute of the toggle" name="toggleClassName" type="string" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = FilterBox;

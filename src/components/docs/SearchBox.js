import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Search from "../lib/Search";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class SearchBox extends React.Component {

	render() {
		return (
			<FormSection id="searchBox" name="Search">
				<Grid>
					<Search placeholder="normal searchbar"/>
					<CodeSample>
						{"<Search placeholder=\"normal search\"/>"}
					</CodeSample>
					<Search placeholder="round searchbar" rounded />
					<hr/>
					<CodeSample noLines>
						{"<Search rounded placeholder=\"round search box\"/>"}
					</CodeSample>
					<PropTable>
						<Prop description="Button text (when undefined, button is hidden" name="button" type="string" />
						<Prop description="CSS class" name="className" type="string" />
					<Prop description="red|blue|black|green|yellow" name="color" type="string" />
						<Prop description="Add a description to the search input" name="description" type="string" />
						<Prop default="false" description="disable the input" name="disable" type="boolean" />
						<Prop description="Add a label to the input" name="label" type="string" />
						<Prop description="Input name attribute" name="name" type="string" />
						<Prop description="onBlur callback fn" name="onBlur" type="function" />
						<Prop description="onChange callback fn" name="onChange" type="function" />
						<Prop description="Input placeholder value" name="placeholder" type="string" />
						<Prop description="Adds border radius to the input field" name="rounded" type="boolean" />
						<Prop description="Input value attribute" name="value" type="string" />
						<Prop description="Width of the input field(10, 20, 50, 100...)" name="width" type="string or number" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = SearchBox;

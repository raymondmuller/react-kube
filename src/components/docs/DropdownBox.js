import React from "react";

import Button from "../lib/Button";
import Dropdown from "../lib/Dropdown";
import FormSection from "../lib/FormSection";
import FormList from "../lib/FormList";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Highlight from "react-highlight";

class DropdownBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: ""};
	}

	handleSelect(item) {
		this.setState({
			selected: item
		});
	}

	render() {
		return (
			<FormSection id="dropdownBox" name="Dropdown">
				<Grid>
					<GridItem size={50}>
						<FormList>
							<p>Selected value: {this.state.selected}</p><hr/>
							<Dropdown data={["Apple", "Banana", "Bread", "Cheese"]} onSelect={this.handleSelect.bind(this)}>
								<a>Show Dropdown</a>
							</Dropdown><br/><br/>
							<Dropdown data={["Apple", "Banana", "Bread", "Cheese"]} onSelect={this.handleSelect.bind(this)}>
								<Button>Show Dropdown</Button>
							</Dropdown>
							<br/>
						</FormList>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Dropdown data={[\"Apple\", \"Banana\", \"Bread\", \"Cheese\"]} onSelect={this.handleSelect.bind(this)}/>"}<br/>
							&emsp;&emsp;{"<a>Show Dropdown</a>"}<br/>
							{"</Dropdown>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = DropdownBox;

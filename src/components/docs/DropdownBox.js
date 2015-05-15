const React = require("react");

const Button = require("../lib/Button");
const Dropdown = require("../lib/Dropdown");
const FormSection = require("../lib/FormSection");
const FormList = require("../lib/FormList");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

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
			<FormSection name="Dropdown">
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

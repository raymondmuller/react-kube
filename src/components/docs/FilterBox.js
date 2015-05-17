const React = require("react");

const Filterbox = require("../lib/Filterbox");
const FormSection = require("../lib/FormSection");
const FormList = require("../lib/FormList");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

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

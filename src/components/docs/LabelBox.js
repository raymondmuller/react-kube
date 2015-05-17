const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Label = require("../lib/Label");
const Badge = require("../lib/Badge");
const Highlight = require("react-highlight");

class LabelBox extends React.Component {

	render() {
		return (
			<FormSection id="labelBox" name="Labels & Badges">
				<Grid>
					<GridItem size={50}>
						<Label color="red">Normal</Label> <br/><br/>
						<Label color="yellow" outline>Outline</Label><br/><br/>
						<Label color="black" outline>Black</Label> <br/><br/>
						<br/><br/>
						<hr/>
						<Badge>1</Badge><br/><br/>
						<Badge color="green"small >3</Badge>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{'<Label color="red">Normal</Label>'}
						</Highlight>
						<Highlight className="javascript">
							{'<Label color="yellow" outline>Yellow outlined</Label>'}
						</Highlight>
						<Highlight className="javascript">
							{'<Label color="black" outline>Black outlined</Label>'}
						</Highlight>
						<hr/>
						<Highlight className="javascript">
							{'<Badge> 1 </Badge>'}
						</Highlight>
						<Highlight className="javascript">
							{'<Badge color="green" small> s </Badge>'}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = LabelBox;

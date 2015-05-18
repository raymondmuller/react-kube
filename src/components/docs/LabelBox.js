import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Label from "../lib/Label";
import Badge from "../lib/Badge";
import Highlight from "react-highlight";

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

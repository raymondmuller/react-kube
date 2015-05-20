import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Label from "../lib/Label";
import Badge from "../lib/Badge";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class LabelBox extends React.Component {

	render() {
		return (
			<FormSection id="labelBox" name="Labels & Badges">
				<Grid>
						<GridItem size={30}>
							<Label color="red">Normal</Label>
						</GridItem>
						<GridItem size={70}>
							<CodeSample noLines>
								{'<Label color="red">Normal</Label>'}
							</CodeSample>
						</GridItem>
						<GridItem size={30}>
							<Label color="yellow" outline>Outline</Label>
						</GridItem>
						<GridItem size={70}>
							<CodeSample noLines>
								{'<Label color="yellow" outline>Yellow outlined</Label>'}
							</CodeSample>
						</GridItem>
						<GridItem size={30}>
							<Label color="black" outline>Black</Label>
						</GridItem>
						<GridItem size={70}>
							<CodeSample noLines>
								{'<Label color="black" outline>Black outlined</Label>'}
							</CodeSample>
						</GridItem>
						<GridItem size={30}>
							<Badge>1</Badge>
						</GridItem>
						<GridItem size={70}>
							<CodeSample noLines>
								{'<Badge> 1 </Badge>'}
							</CodeSample>
						</GridItem>
						<GridItem size={30}>
							<Badge color="green"small >3</Badge>
						</GridItem>
						<GridItem size={70}>
							<CodeSample noLines>
								{'<Badge color="green" small> s </Badge>'}
							</CodeSample>
						</GridItem>
				</Grid>
				<PropTable title="LABEL: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="black|blue|red|yellow|green|white" name="color" type="string" />
						<Prop description="Outlined label" name="outline" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="BADGE: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="black|blue|red|yellow|green|white" name="color" type="string" />
						<Prop default="false" description="Want a small badge?" name="small" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
			</FormSection>
		);
	}
}

module.exports = LabelBox;

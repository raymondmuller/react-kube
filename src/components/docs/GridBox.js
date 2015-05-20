import React from "react";

import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class GridBox extends React.Component {

	render() {

		return (
			<FormSection id="gridBox" name="Grid">
				<Grid>
						<Grid>
							<GridItem className="btn-yellow text-centered" size={100}>100%</GridItem>
						</Grid>
						<Grid>
							<GridItem className="btn-red text-centered" size={50}>
								50%
							</GridItem>
							<GridItem className="btn-red text-centered" size={50}>
								50%
							</GridItem>
						</Grid>
						<CodeSample>
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={50}> 50% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={50}> 50% </GridItem>"}<br/>
							{"</Grid>"}
						</CodeSample>
						<Grid>
							<GridItem className="btn-green text-centered" size={10}>
								10%
							</GridItem>
							<GridItem className="btn-green text-centered" size={90}>
								90%
							</GridItem>
						</Grid>
						<CodeSample>
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={10}> 10% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={90}> 90% </GridItem>"}<br/>
							{"</Grid>"}
						</CodeSample>
						<Grid>
							<GridItem className="btn-blue text-centered" size={40}>
								40%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={60}>
								60%
							</GridItem>
						</Grid>
						<Grid>
							<GridItem className="btn-black text-centered" size={35}>
								35%
							</GridItem>
							<GridItem className="btn-black text-centered" size={65}>
								65%
							</GridItem>
						</Grid>
						<Grid>
							<GridItem className="btn-yellow text-centered" size={33}>
								33%
							</GridItem>
							<GridItem className="btn-yellow text-centered" size={66}>
								66%
							</GridItem>
						</Grid>
						<Grid>
							<GridItem className="btn-green text-centered" size={33}>
								33%
							</GridItem>
							<GridItem className="btn-green text-centered" size={33}>
								33%
							</GridItem>
							<GridItem className="btn-green text-centered" size={33}>
								33%
							</GridItem>
						</Grid>
						<CodeSample>
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={33}> 33% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={33}> 33% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={33}> 33% </GridItem>"}<br/>
							{"</Grid>"}
						</CodeSample>
						<Grid>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
						</Grid>
						<hr/>
						<CodeSample noLines>
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={20}> 20% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={20}> 20% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={20}> 20% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={20}> 20% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={20}> 20% </GridItem>"}<br/>
							{"</Grid>"}
						</CodeSample>
					<PropTable title="GRID: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop default="false" description="Adds the end class to the grid (removes row margin)" name="end" type="boolean" />
						<Prop description="The id attribute" name="id" type="string" />
						<Prop default="false" description="Adds the units-role-left class" name="left" type="boolean" />
						<Prop description="Adds more precise controls over the width on mobile devices (value in percentage)" name="mobile" type="string or number" />
						<Prop default="false" description="Adds a padding of 1.618em" name="padding" type="boolean" />
						<Prop default="false" description="Adds the units-role-right class" name="right" type="boolean" />
						<Prop default="false" description="removes left and right padding" name="split" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="GRID ITEM: AVAILABLE PROPS">
						<Prop default="false" description="Adds unit-centered class" name="centered" type="boolean" />
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="The id attribute" name="id" type="string" />
						<Prop description="Push by unit" name="push" type="string or number" />
						<Prop default="false" description="Push right" name="right" type="boolean" />
						<Prop description="Grid item size (e.g. 20, 33, 50}" name="size" type="string or number" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = GridBox;

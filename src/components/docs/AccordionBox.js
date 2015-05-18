import React from "react";

import Accordion from "../lib/Accordion";
import AccordionGroup from "../lib/AccordionGroup";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Highlight from "react-highlight";

class AccordionBox extends React.Component {

	render() {
		return (
			<FormSection id="accordionBox" name="Accordion">
				<Grid>
					<GridItem size={50}>
						<Accordion title="first title">
							<p>Content in the first panel</p>
						</Accordion>
						<Accordion title="second title">
							<p>Content in the second panel</p>
						</Accordion><br/>
						<hr/>
						<p> Grouped (one accordion open at a time) </p>
						<AccordionGroup>
							<Accordion title="first title">
							<p>Content in the first panel</p>
							</Accordion>
							<Accordion title="second title">
								<p>Content in the second panel</p>
							</Accordion>
					</AccordionGroup>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Accordion title=\"first title\">"}<br/>
							&emsp;&emsp;{"<p>Content in the first panel</p>"}<br/>
							{"</Accordion>"}<br/>
							{"<Accordion title=\"second title\">"}<br/>
							&emsp;&emsp;{"<p>Content in the second panel</p>"}<br/>
							{"</Accordion>"}
						</Highlight>
						<hr/>
						<Highlight className="javascript">
							{"<AccordionGroup>"}<br/>
							&emsp;&emsp;{"<Accordion title=\"first title\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content in the first panel</p>"}<br/>
							&emsp;&emsp;{"</Accordion>"}<br/>
							&emsp;&emsp;{"<Accordion title=\"second title\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content in the second panel</p>"}<br/>
							&emsp;&emsp;{"</Accordion>"}<br/>
							{"</AccordionGroup"}
						</Highlight>
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AccordionBox;

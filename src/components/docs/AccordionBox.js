import React from "react";

import Accordion from "../lib/Accordion";
import AccordionGroup from "../lib/AccordionGroup";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";

import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";


class AccordionBox extends React.Component {

	render() {
		return (
			<FormSection id="accordionBox" name="Accordion">
				<Grid>
						<h3>Normal Accordion</h3>
						<Accordion title="first title">
							<p>Content in the first panel</p>
						</Accordion>
						<Accordion title="second title">
							<p>Content in the second panel</p>
						</Accordion>
						<CodeSample>
							{'<Accordion title=\"first title\">'}<br/>
							&emsp;&emsp;{'<p>Content in the first panel</p>'}<br/>
							{'</Accordion>'}<br/>
							{"<Accordion title=\"second title\">"}<br/>
							&emsp;&emsp;{"<p>Content in the second panel</p>"}<br/>
							{"</Accordion>"}
						</CodeSample>
						<hr/>
						<h3> Grouped (one accordion open at a time) </h3>
						<AccordionGroup>
							<Accordion title="first title">
							<p>Content in the first panel</p>
							</Accordion>
							<Accordion title="second title">
								<p>Content in the second panel</p>
							</Accordion>
						</AccordionGroup>
						<CodeSample>
							{"<AccordionGroup>"}<br/>
							&emsp;&emsp;{"<Accordion title=\"first title\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content in the first panel</p>"}<br/>
							&emsp;&emsp;{"</Accordion>"}<br/>
							&emsp;&emsp;{"<Accordion title=\"second title\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content in the second panel</p>"}<br/>
							&emsp;&emsp;{"</Accordion>"}<br/>
							{"</AccordionGroup"}
						</CodeSample>
				</Grid>
				<PropTable>
					<Prop default="-" description="CSS class content" name="className" type="string" />
					<Prop default="true" description="Is the accordion collapsed?" name="collapse" type="boolean" />
					<Prop default="-" description="On close callback fn" name="onClose" type="function" />
					<Prop default="-" description="On show callback fn" name="onShow" type="function" />
					<Prop default="-" description="CSS class for the panel" name="panelClassName" type="string" />
					<Prop default="-" description="Style for the panel" name="panelStyle" type="object" />
					<Prop default="-" description="Style for the content" name="style" type="object" />
					<Prop default="-" description="Accordion title" name="title" type="string" />
					<Prop default="-" description="CSS class for the toggle +-" name="toggleClassName" type="string" />
					<Prop default="-" description="Style for the toggle +-" name="toggleStyle" type="object" />
				</PropTable>
			</FormSection>
		);
	}
}

module.exports = AccordionBox;

const React = require("react");

const Accordion = require("../lib/Accordion");
const AccordionGroup = require("../lib/AccordionGroup");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Highlight = require("react-highlight");

class AccordionBox extends React.Component {

	render() {
		return (
			<FormSection name="Accordion">
				<Grid>
					<GridItem size={50}>
						<Accordion title="first title">
							<p>Content in the first panel</p>
						</Accordion>
						<Accordion title="second title">
							<p>Content in the second panel</p>
						</Accordion>
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
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = AccordionBox;

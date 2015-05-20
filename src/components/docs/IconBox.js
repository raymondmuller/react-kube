import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Button from "../lib/Button";
import CodeSample from "./CodeSample";
import Accordion from "../lib/Accordion";

class IconBox extends React.Component {

	render() {
		return (
			<FormSection id="iconBox" name="Icons">
				<Grid>
						For now you can (only) add icons to buttons. I will extend this functionality to more components later
						<p className="bold">Note that <a href="http://fortawesome.github.io/Font-Awesome/" target="_new">FontAwesome</a> is a must for this to work!</p>
						<br/><br/>
						<GridItem size={50}>
							<Button icon="github"> Github</Button>
							<CodeSample>
								{"<Button icon=\"github\">"}
								&emsp;&emsp;{"Github"}
								{"</Button>"}
							</CodeSample>
						</GridItem>
						<GridItem size={50}>
							<Button color="blue" icon="facebook"> Facebook</Button>
							<CodeSample>
								{"<Button color=\"blue\" icon=\"facebook\">"}<br/>
								&emsp;&emsp;{"Facebook"}<br/>
								{"</Button>"}
							</CodeSample>
						</GridItem>
				</Grid>
				<Accordion title="FontAwesome is required to use this option">
					<a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_new">Font Awesome Icon List </a>
				</Accordion>
			</FormSection>
		);
	}
}

module.exports = IconBox;

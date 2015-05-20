import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import LinkButton from "../lib/LinkButton";

class TypographyBox extends React.Component {

	render() {
		return (
			<FormSection id="typographyBox" name="Typography & Helpers">
				<Grid>
					<p>No React stuff going on here (yet), please refer to the Official Kube Documentation</p>
						<LinkButton color="blue" target="new" url="http://imperavi.com/kube/css/typography/" >Typography</LinkButton>
						<span> </span> <span> </span>
						<LinkButton color="blue" target="new" url="http://imperavi.com/kube/css/helpers/">Helpers</LinkButton>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TypographyBox;

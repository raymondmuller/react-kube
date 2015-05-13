const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const LinkButton = require("../lib/LinkButton");

class TypographyBox extends React.Component {

	render() {
		return (
			<FormSection name="Typography & Helpers">
				<Grid>
					<p>No React stuff going on here (yet), please refer to the Official Kube Documentation</p>
						<LinkButton color="blue" url="http://imperavi.com/kube/css/typography/" target="new">Typography</LinkButton>
						<span> </span> <span> </span>
						<LinkButton color="blue" url="http://imperavi.com/kube/css/helpers/" target="new">Helpers</LinkButton>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TypographyBox;

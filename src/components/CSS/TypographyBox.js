const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");
const LinkButton = require("../Lib/LinkButton");

class TypographyBox extends React.Component {

	render() {
		return(
			FormSection name="Typography">
				<Grid>
					<p>No React stuff going on here, please refer to the</p>
					<LinkButton color="blue" url="http://imperavi.com/kube/css/typography/" target="new">Official Kube Documentation</LinkButton>
				</Grid>
			</FormSection> 
		)
	}
}

module.exports = TypographyBox;
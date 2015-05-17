const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Livesearch = require("../lib/Livesearch");
const Highlight = require("react-highlight");

class LivesearchBox extends React.Component {

	render() {
		return (
			<FormSection id="#Livesearch" name="Livesearch">
				<Grid>
					<GridItem size={50}>
						<Livesearch />
					</GridItem>
					<GridItem className="demo" size={50}>
						<p>Note: For the moment these are just styles. This component is not doing anything yet :) Working on that (<a href="https://github.com/raymondmuller/react-kube/issues/8" target="_new"><li className="fa fa-github"></li> Livesearch Issue</a>)</p>
						<Highlight className="javascript">
							{"<Livesearch />"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = LivesearchBox;

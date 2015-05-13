const React = require("react");
const FormSection = require("./lib/FormSection");
const Grid = require("./lib/Grid");

class GetStarted extends React.Component {

	render() {
		return (
			<div id="tab1">
				<FormSection name="Get Started">
					<Grid>
						Work in progress! *Coming Soon*
							<br/> <br/>
						TODO: <br/>
						- Add JS Tools <br/>
						- Remove Jquery and Kube.js dependencies <br/>
						- Add Tests <br/>
						- Add More Docs and Demos <br/>
					</Grid>
				</FormSection>
			</div>
		);
	}
}

module.exports = GetStarted;

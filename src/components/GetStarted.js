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
						- Add missing components (see <a href="https://github.com/raymondmuller/react-kube/issues" target="_new">Github Issues</a>) <br/>
						- Remove jQuery and Kube.js dependencies <br/>
						- Add Tests <br/>
						- Add More Docs and Demos <br/>
						<br/>
					</Grid>
				</FormSection>
			</div>
		);
	}
}

module.exports = GetStarted;

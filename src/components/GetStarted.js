const React = require("react");
const FormSection = require("./lib/FormSection");
const Grid = require("./lib/Grid");
const Highlight = require("react-highlight");

class GetStarted extends React.Component {

	render() {
		return (
			<div id="tab1">
				<FormSection name="Get Started">
					<Grid>
						Under active development | *Stay tuned!*
						<hr/>
							- npm install react-kube or bower install react-kube <br/>
							- require the desired component to use it<br/><br/>
							for example:
							<Highlight>
								&emsp;&emsp;{"const Alert = require(\"react-kube/Alert\")"}
							</Highlight>
						<hr/>
						Todos: <br/>
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

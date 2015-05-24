import React from "react";

import FormSection from "./lib/FormSection";
import Grid from "./lib/Grid";
import Highlight from "react-highlight";

class GetStarted extends React.Component {

	shiftWindow() {
		window.scrollBy(0, -60); //dirty fix for anchor links problem with fixed header
	}

	componentWillMount() {
		window.addEventListener("hashchange", this.shiftWindow);
	}

	componentDidMount() {
		if (location.hash) { this.shiftWindow(); }
	}

	componentWillUnmount(){
		window.removeEventListener("hashchange", this.shiftWindow);
	}

	render() {
		return (
			<div id="tab1">
				<FormSection name="react-kube">
					<Grid>
						<h4>Version: 0.3.0 (BETA)</h4>
						Found a bug? Please log an issue => <li className="fa fa-github"></li> <a href="https://github.com/raymondmuller/react-kube/issues" target="_new">Github</a>
						<hr/>
							- npm install react-kube <br/>
							- require the desired component to use it<br/><br/>
							for example:
							<Highlight>
								&emsp;&emsp;{"const Alert = require(\"react-kube/Alert\")"}
							</Highlight>
						<hr/>
						Todos: <br/>
						- (see <a href="https://github.com/raymondmuller/react-kube/issues" target="_new">Github Issues</a>) <br/>
						- Improve Tests <br/>
						- Improve documentation and demos <br/>
						<br/>
						Feel free to contact me if you have any suggestions, questions or remarks.
					</Grid>
				</FormSection>
			</div>
		);
	}
}

module.exports = GetStarted;

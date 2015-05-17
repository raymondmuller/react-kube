const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Tabs = require("../lib/Tabs");
const Tab = require("../lib/Tab");
const Highlight = require("react-highlight");

class TabBox extends React.Component {

	render() {
		return (
			<FormSection id="#tabs" name="Tabs">
				<Grid>
					<GridItem size={50}>
						<Tabs equals={false}>
							<Tab id="#demo-tab-1" title="Tab 1">
								<p>Content of tab 1</p>
							</Tab>
							<Tab id="#demo-tab-2" title="Tab 2">
								<p>Content of tab 2</p>
							</Tab>
							<Tab id="#demo-tab-3" title="Tab 3">
								<p>Content of tab 3</p>
							</Tab>
						</Tabs>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Tabs>"}<br/>
							&emsp;&emsp;{"<Tab id=\"#demo-tab-1\" title=\"Tab 1\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content of tab 1</p>"}<br/>
							&emsp;&emsp;{"</Tab>"}<br/>
							&emsp;&emsp;{"<Tab id=\"#demo-tab-2\" title=\"Tab 2\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content of tab 2</p>"}<br/>
							&emsp;&emsp;{"</Tab>"}<br/>
							&emsp;&emsp;{"<Tab id=\"#demo-tab-3\" title=\"Tab 3\">"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<p>Content of tab 3</p>"}<br/>
							&emsp;&emsp;{"</Tab>"}<br/>
							{"</Tabs>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TabBox;

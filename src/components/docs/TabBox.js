import React from "react";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Tabs from "../lib/Tabs";
import Tab from "../lib/Tab";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class TabBox extends React.Component {

	render() {
		return (
			<FormSection id="tabsBox" name="Tabs">
				<Grid>
					<Tabs>
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
					<hr/>
					<CodeSample noLines>
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
					</CodeSample>
					<PropTable title="TABS: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="ID attribute" name="id" type="string" />
						<Prop default="false" description="Adds nav-pills class" name="pills" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="TAB: AVAILABLE PROPS">
						<Prop description="Determines active tab" name="active" type="boolean" />
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="ID attribute" name="id" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop description="Tab title" name="title" type="string" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = TabBox;

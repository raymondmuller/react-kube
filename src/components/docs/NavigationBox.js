const React = require("react");

const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const BreadCrumbs = require("../lib/BreadCrumbs");
const BreadCrumb = require("../lib/BreadCrumb");
const Pagination = require("../lib/Pagination");
const PaginationItem = require("../lib/PaginationItem");
const Highlight = require("react-highlight");

class NavigationBox extends React.Component {

	render() {
		return (
			<FormSection id="navigation" name="Navigation">
				<Grid>
					<GridItem size={50}>
						<p>NavigationBar demo - coming soon</p>
						<hr/>
						<Pagination left="#navigation" right="#navigation">
							<PaginationItem> 1 </PaginationItem>
							<PaginationItem> 2 </PaginationItem>
							<PaginationItem> 3 </PaginationItem>
						</Pagination>
						<hr/>
						<BreadCrumbs>
							<BreadCrumb>one</BreadCrumb>
							<BreadCrumb>two</BreadCrumb>
							<BreadCrumb>three</BreadCrumb>
						</BreadCrumbs>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<NavigationToggle target=\"#navbar-1\"> Menu </NavigationToggle>"}<br/>
							&emsp;&emsp;{"<Navigation id=\"#navbar-1\" toggle>"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"<NavigationBar left>"}<br/>
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<NavigationItem> Home </NavigationItem"}<br/>
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<NavigationItem> Contact </NavigationItem"}<br/>
							&emsp;&emsp;&emsp;&emsp;{"</NavigationBar>"}
							&emsp;&emsp;{"</Navigation"}
						</Highlight>
						<Highlight className="javascript">
							{"<Pagination left=\"#previous\" right=\"#next\">"}<br/>
							&emsp;&emsp;{"<PaginationItem> 1 </PaginationItem>"}<br/>
							&emsp;&emsp;{"<PaginationItem> 2 </PaginationItem>"}<br/>
							&emsp;&emsp;{"<PaginationItem> 3 </PaginationItem>"}<br/>
							{"</Pagination>"}
						</Highlight> 
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = NavigationBox;

import React from "react";

import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Breadcrumbs from "../lib/Breadcrumbs";
import Breadcrumb from "../lib/Breadcrumb";
import Pagination from "../lib/Pagination";
import PaginationItem from "../lib/PaginationItem";
import Highlight from "react-highlight";

class NavigationBox extends React.Component {

	render() {
		return (
			<FormSection id="navigationBox" name="Navigation">
				<Grid>
					<GridItem size={50}>
						<p>NavigationBar demo - coming soon</p>
						<hr/>
						<Pagination active={1} left="#navigation" right="#navigation">
							<PaginationItem> 1 </PaginationItem>
							<PaginationItem> 2 </PaginationItem>
							<PaginationItem> 3 </PaginationItem>
						</Pagination>
						<hr/>
						<Breadcrumbs>
							<Breadcrumb>one</Breadcrumb>
							<Breadcrumb>two</Breadcrumb>
							<Breadcrumb>three</Breadcrumb>
						</Breadcrumbs>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Pagination active={1} left=\"#previous\" right=\"#next\">"}<br/>
							&emsp;&emsp;{"<PaginationItem> 1 </PaginationItem>"}<br/>
							&emsp;&emsp;{"<PaginationItem> 2 </PaginationItem>"}<br/>
							&emsp;&emsp;{"<PaginationItem> 3 </PaginationItem>"}<br/>
							{"</Pagination>"}
						</Highlight>
						<Highlight className="javascript">
							{"<BreadCrumbs>"}<br/>
							&emsp;&emsp;{"<BreadCrumb>one</BreadCrumb>"}<br/>
							&emsp;&emsp;{"<BreadCrumb>two</BreadCrumb>"}<br/>
							&emsp;&emsp;{"<BreadCrumb>three</BreadCrumb>"}<br/>
							{"</BreadCrumbs>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = NavigationBox;

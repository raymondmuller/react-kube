import React from "react";

import Breadcrumb from "../lib/Breadcrumb";
import Breadcrumbs from "../lib/Breadcrumbs";
import CodeSample from "./CodeSample";
import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Navigation from "../lib/Navigation";
import NavigationBar from "../lib/NavigationBar";
import NavigationItem from "../lib/NavigationItem";
import Pagination from "../lib/Pagination";
import PaginationItem from "../lib/PaginationItem";
import Prop from "./Prop";
import PropTable from "./PropTable";
import SubNavigation from "../lib/SubNavigation";

class NavigationBox extends React.Component {

	render() {
		return (
			<FormSection id="navigationBox" name="Navigation">
				<Grid>
					<Navigation id="navigationDemo">
						<NavigationItem color="white" logo uppercase>Menu</NavigationItem>
						<NavigationBar color="white">
							<SubNavigation background="#ff5722" title="First (with subnavigation)" top={15} >
								<NavigationItem target="_new" url="http://www.github.com/raymondmuller/react-kube">
									react-kube source code
								</NavigationItem>
								<NavigationItem target="_new" url="https://facebook.github.io/react/">
									react
								</NavigationItem>
							</SubNavigation>
							<NavigationItem color="white"> Second </NavigationItem>
						</NavigationBar>
					</Navigation>
					<CodeSample>
						{"<Navigation id=\"navigationDemo\">"}<br/>
						&emsp;&emsp;{"<NavigationBar color=\"white\">"}<br/>
						&emsp;&emsp;&emsp;&emsp;{"<NavigationItem color=\"white\" logo uppercase>Menu</NavigationItem>"}<br/>
						&emsp;&emsp;&emsp;&emsp;{"<SubNavigation background=\"#ff5722\" title=\"First (with subnavigation)\" top={15} >"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<NavigationItem target=\"_new\" url=\"http://www.github.com/raymondmuller/react-kube\">"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"react-kube source code"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</NavigationItem>"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<NavigationItem target=\"_new\" url=\"https://facebook.github.io/react/\">"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"react"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</NavigationItem>"}<br/>
						&emsp;&emsp;&emsp;&emsp;{"</SubNavigation>"}<br/>
						&emsp;&emsp;&emsp;&emsp;{"<NavigationItem color=\"white\">"}<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"Second"}<br/>
						&emsp;&emsp;&emsp;&emsp;{"</NavigationItem>"}<br/>
						&emsp;&emsp;{"</NavigationBar>"}<br/>
						{"</Navigation>"}
					</CodeSample>
					<Pagination active={1} left="#navigation" right="#navigation">
						<PaginationItem> 1 </PaginationItem>
						<PaginationItem> 2 </PaginationItem>
						<PaginationItem> 3 </PaginationItem>
					</Pagination>
					<CodeSample>
						{"<Pagination active={1} left=\"#previous\" right=\"#next\">"}<br/>
						&emsp;&emsp;{"<PaginationItem> 1 </PaginationItem>"}<br/>
						&emsp;&emsp;{"<PaginationItem> 2 </PaginationItem>"}<br/>
						&emsp;&emsp;{"<PaginationItem> 3 </PaginationItem>"}<br/>
						{"</Pagination>"}
					</CodeSample>
					<Breadcrumbs>
						<Breadcrumb>one</Breadcrumb>
						<Breadcrumb>two</Breadcrumb>
						<Breadcrumb>three</Breadcrumb>
					</Breadcrumbs>
					<hr/>
					<CodeSample noLines>
						{"<BreadCrumbs>"}<br/>
						&emsp;&emsp;{"<BreadCrumb>one</BreadCrumb>"}<br/>
						&emsp;&emsp;{"<BreadCrumb>two</BreadCrumb>"}<br/>
						&emsp;&emsp;{"<BreadCrumb>three</BreadCrumb>"}<br/>
						{"</BreadCrumbs>"}
					</CodeSample>
					<PropTable title="PAGINATION: AVAILABLE PROPS">
						<Prop default="0" description="set active index" name="active" type="number" />
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Url of the back arrow" name="left" type="string" />
						<Prop description="Url of the next arrow" name="right" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="PAGINATION ITEM: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="onClick callback fn (passes index, starting from 0)" name="onClick" type="function" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop default="_self" description="Url target" name="target" type="string" />
						<Prop description="href attribute of the item" name="url" type="string" />
					</PropTable>
					<PropTable title="BREADCRUMBS: AVAILABLE PROPS">
						<Prop description="CSS class" name="className" type="string" />
						<Prop default="false" description="Shows / instead of > between items" name="path" type="boolean" />
						<Prop description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="BREADCRUMB: AVAILABLE PROPS">
						<Prop description="Is active?" name="active" type="boolean" />
						<Prop description="CSS class" name="className" type="string" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop description="Target of the url" name="target" type="string" />
						<Prop description="URL (href attribute)" name="url" type="string" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = NavigationBox;

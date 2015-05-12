const React = require("react");
const Navigation = require("../Lib/Navigation");
const NavigationBar = require("../Lib/NavigationBar");
const NavigationItem = require("../Lib/NavigationItem");

const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");

const Pagination = require("../Lib/Pagination");
const PaginationItem = require("../Lib/PaginationItem");

class NavigationBox extends React.Component {

	render() {

		return (
			<FormSection name="Navigation">
					<Grid>
						<GridItem size={50}>
							<Pagination>
								<PaginationItem> 1 </PaginationItem>
								<PaginationItem> 2 </PaginationItem>
								<PaginationItem> 3 </PaginationItem>
							</Pagination>
						</GridItem>
						<GridItem size={50}>//TODO - Code sample and fix active state</GridItem>
					</Grid>
				</FormSection>
		
		)
	}

}

module.exports = NavigationBox;
const React = require("react");

const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");

const Pagination = require("../lib/Pagination");
const PaginationItem = require("../lib/PaginationItem");

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
		);
	}
}

module.exports = NavigationBox;

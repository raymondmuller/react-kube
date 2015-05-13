const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
var Highlight = require('react-highlight');

class GridBox extends React.Component {

	render() {

		return (
			<FormSection name="Grid">
				<Grid>
					<GridItem size={50}>
						<Grid>
							<GridItem className="btn-yellow text-centered" size={100}>100%</GridItem>
						</Grid>
						<Grid>
							<GridItem className="btn-red text-centered" size={50}>
								50%
							</GridItem>
							<GridItem className="btn-red text-centered" size={50}>
								50%
							</GridItem>
						</Grid>

						<Grid>
							<GridItem className="btn-green text-centered" size={10}>
								10%
							</GridItem>
							<GridItem className="btn-green text-centered" size={90}>
								90%
							</GridItem>
						</Grid>

						<Grid>
							<GridItem className="btn-blue text-centered" size={40}>
								40%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={60}>
								60%
							</GridItem>
						</Grid>

						<Grid>
							<GridItem className="btn-black text-centered" size={35}>
								35%
							</GridItem>
							<GridItem className="btn-black text-centered" size={65}>
								65%
							</GridItem>
						</Grid>

						<Grid>
							<GridItem className="btn-yellow text-centered" size={33}>
								33%
							</GridItem>
							<GridItem className="btn-yellow text-centered" size={66}>
								66%
							</GridItem>
						</Grid>

						<Grid>
							<GridItem className="btn-green text-centered" size={33}>
								33%
							</GridItem>
							<GridItem className="btn-green text-centered" size={33}>
								33%
							</GridItem>
							<GridItem className="btn-green text-centered" size={33}>
								33%
							</GridItem>
						</Grid>

						<Grid>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
							<GridItem className="btn-blue text-centered" size={20}>
								20%
							</GridItem>
						</Grid>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={50}> 50% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={50}> 50% </GridItem>"}<br/>
							{"</Grid>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={10}> 10% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={90}> 90% </GridItem>"}<br/>
							{"</Grid>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Grid>"}<br/>
							&emsp;&emsp;{"<GridItem size={33}> 33% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={33}> 33% </GridItem>"}<br/>
							&emsp;&emsp;{"<GridItem size={33}> 33% </GridItem>"}<br/>
							{"</Grid>"}
						</Highlight>
					</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = GridBox;

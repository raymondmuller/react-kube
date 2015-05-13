const React = require("react");
const FormSection = require("../lib/FormSection");
const Grid = require("../lib/Grid");
const GridItem = require("../lib/GridItem");
const Blocks = require("../lib/Blocks");
const Block = require("../lib/Block");
const Highlight = require("react-highlight");

class BlockBox extends React.Component {

	render() {
		return (
			<FormSection name="Block">
				<Grid>
					<GridItem size={50}>
						<Blocks amount={2}>
							<Block className="btn-yellow text-centered"> amount=2 </Block>
							<Block className="btn-yellow text-centered"> amount=2 </Block>
						</Blocks>
						<Blocks amount={3}>
							<Block className="btn-green text-centered"> amount=3 </Block>
							<Block className="btn-green text-centered"> amount=3 </Block>
							<Block className="btn-green text-centered"> amount=3 </Block>
						</Blocks>
						<Blocks amount={5}>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
						</Blocks>
					</GridItem>
					<GridItem className="demo" size={50}>
						<Highlight className="javascript">
							{"<Blocks amount={2}>"}<br/>
							&emsp;&emsp;{"<Block> amount=2 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=2 </Block>"}<br/>
							{"</Blocks>"}
						</Highlight>
						<Highlight className="javascript">
							{"<Blocks amount={5}>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							{"</Blocks>"}
						</Highlight>
						</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = BlockBox;

const React = require("react");
const FormSection = require("../Lib/FormSection");
const Grid = require("../Lib/Grid");
const GridItem = require("../Lib/GridItem");
const Blocks = require("../Lib/Blocks");
const Block = require("../Lib/Block");

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
					<GridItem size={50}>//TODO - Code sample</GridItem>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = BlockBox;

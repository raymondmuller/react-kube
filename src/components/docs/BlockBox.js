import React from "react";

import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import GridItem from "../lib/GridItem";
import Blocks from "../lib/Blocks";
import Block from "../lib/Block";
import Highlight from "react-highlight";

class BlockBox extends React.Component {

	render() {
		return (
			<FormSection id="blockBox" name="Block">
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

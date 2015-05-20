import React from "react";

import FormSection from "../lib/FormSection";
import Grid from "../lib/Grid";
import Blocks from "../lib/Blocks";
import Block from "../lib/Block";

import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class BlockBox extends React.Component {

	render() {
		return (
			<FormSection id="blockBox" name="Block">
				<Grid>
						<Blocks amount={2}>
							<Block className="btn-yellow text-centered"> amount=2 </Block>
							<Block className="btn-yellow text-centered"> amount=2 </Block>
						</Blocks>
						<CodeSample>
							{"<Blocks amount={2}>"}<br/>
							&emsp;&emsp;{"<Block> amount=2 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=2 </Block>"}<br/>
							{"</Blocks>"}
						</CodeSample>
						<Blocks amount={3}>
							<Block className="btn-green text-centered"> amount=3 </Block>
							<Block className="btn-green text-centered"> amount=3 </Block>
							<Block className="btn-green text-centered"> amount=3 </Block>
						</Blocks>
						<CodeSample>
							{"<Blocks amount={3}>"}<br/>
							&emsp;&emsp;{"<Block> amount=3 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=3 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=3 </Block>"}<br/>
							{"</Blocks>"}
						</CodeSample>
						<Blocks amount={5}>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
							<Block className="btn-blue text-centered"> amount=5 </Block>
						</Blocks>
						<CodeSample>
							{"<Blocks amount={5} mobile={50}>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							&emsp;&emsp;{"<Block> amount=5 </Block>"}<br/>
							{"</Blocks>"}
						</CodeSample>
					<PropTable noLines title="BLOCKS: AVAILABLE PROPS">
						<Prop default="-" description="Amount of children blocks" name="amount" type="string or number" />
						<Prop default="-" description="CSS class" name="className" type="string" />
						<Prop default="-" description="Specify custom behaviour for the width of blocks on mobile devices (amount in percentage)" name="mobile" type="object" />
						<Prop default="-" description="Style attribute" name="style" type="object" />
					</PropTable>
					<PropTable title="BLOCK: AVAILABLE PROPS">
						<Prop default="-" description="CSS class" name="className" type="string" />
						<Prop default="-" description="Style attribute" name="style" type="object" />
					</PropTable>
				</Grid>
			</FormSection>
		);
	}
}

module.exports = BlockBox;

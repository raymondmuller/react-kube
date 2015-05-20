import React from "react";

import Blocks from "../lib/Blocks";
import Block from "../lib/Block";
import FormSection from "../lib/FormSection";
import InfiniteScroll from "../lib/InfiniteScroll";
import CodeSample from "./CodeSample";
import PropTable from "./PropTable";
import Prop from "./Prop";

class InfiniteScrollBox extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				items: ["Lorem ipsum... ", "Lorem ipsum... ", "Lorem ipsum... ", "Lorem ipsum... ", "Lorem ipsum... ", "Lorem ipsum... "],
				scrollDivColor: "gray",
				scrollDivHeight: "100px"};
	}

	handleScrollEnd() {

		if(this.state.items.length > 30) {
			this.setState({
			finishedScrolling: true
			});
		}
		this.state.items.push("Lorem ipsum...");

		if(!this.state.isInfiniteLoading){
			this.setState({
				isInfiniteLoading: true,
				scrollDivColor: "yellow"
			});
			//do more stuff

			//set loading to false
			this.setState({
				isInfiniteLoading: false
			});
		}
	}
	render() {
		let scrollStyle = {
			background: this.state.scrollDivColor
		};

		let items = this.state.items.map((item) => {
			return <p>{item}</p>;
		});

		return (
			<FormSection id="infiniteScrollBox" name="InfiniteScroll">
				<Blocks amount={1}>
					<Block>
						<InfiniteScroll finished={this.state.finishedScrolling} isLoading={this.state.isInfiniteLoading} onScrollEnd={this.handleScrollEnd.bind(this)} style={{height: "100px", overflowY: "scroll"}}>
							<div style={scrollStyle}>
								{items}
							</div>
						</InfiniteScroll>
						<hr/>
						<CodeSample noLines>
							{"<InfiniteScroll"} <br/>
							{"finished={this.state.finishedScrolling}"}<br/>
							{"isLoading={this.state.isInfiniteLoading}"}<br/>
							{"onScrollEnd={this.handleScrollEnd.bind(this)}"}<br/>
							{"style={{height: \"100px\", overflowY: \"scroll\"}}>"}<br/>
							{"threshold={25}"}<br/>
							&emsp;&emsp;{"{items}"}<br/>
							{"</InfiniteScroll>"}
						</CodeSample>
					</Block>
				</Blocks>
				<PropTable>
						<Prop default="false" description="Pass true when there is no more data to load" name="finished" type="boolean" />
						<Prop description="isLoading boolean to avoid multiple requests" name="isLoading" type="boolean" />
						<Prop description="onScrollEnd callback fn (e.g. use this to load extra data)" name="data" required type="array" />
						<Prop description="Style attribute" name="style" type="object" />
						<Prop default="25" description="scroll threshold" name="threshold" type="number" />
					</PropTable>
			</FormSection>
		);
	}
}

module.exports = InfiniteScrollBox;

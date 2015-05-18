import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Blocks from "../src/Components/lib/Blocks";
import Block from "../src/Components/lib/Block";

describe("Blocks", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<Blocks amount={2}>
				<Block>test</Block>
			</Blocks>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "blocks-2"));
	});
});

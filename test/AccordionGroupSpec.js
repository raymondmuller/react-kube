import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import AccordionGroup from "../src/components/lib/AccordionGroup";
import Accordion from "../src/components/lib/Accordion";

describe("AccordionGroup", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<AccordionGroup>
				<p>test</p>
			</AccordionGroup>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "span"));
	});
});

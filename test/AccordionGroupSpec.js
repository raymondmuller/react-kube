import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import AccordionGroup from "../src/components/lib/AccordionGroup";
import Accordion from "../src/components/lib/Accordion";

describe.only("AccordionGroup", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<AccordionGroup>
				<p>test</p>
			</AccordionGroup>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "span"));
	});

	it("should assign the id prop", function(){
		let instance = ReactTestUtils.renderIntoDocument(
		<AccordionGroup id="test">
				<p>test</p>
		</AccordionGroup>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "span").getDOMNode().id === "test");
	});
});

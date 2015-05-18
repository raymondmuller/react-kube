import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import RadioButton from "../src/Components/lib/RadioButton";

describe("RadioButton", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<RadioButton>
				<span>Test Pagination</span>
			</RadioButton>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "input").getDOMNode().type === "radio");
	});
});

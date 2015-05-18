import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import SelectOption from "../src/Components/lib/SelectOption";

describe("SelectOption", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<SelectOption>Option 1</SelectOption>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "option"));
	});
});

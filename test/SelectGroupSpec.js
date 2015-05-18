import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import SelectGroup from "../src/Components/lib/SelectGroup";

describe("SelectGroup", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<SelectGroup>
				<option>test</option>
			</SelectGroup>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "optgroup"));
	});
});

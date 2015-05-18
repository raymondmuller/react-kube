import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Select from "../src/Components/lib/Select";

describe("Select", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<Select>
				<option>test</option>
			</Select>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "select"));
	});
});

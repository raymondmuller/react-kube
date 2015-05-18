import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Autocomplete from "../src/components/lib/Autocomplete";

describe("Autocomplete", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<Autocomplete data={["1", "2", "3"]} />
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "input").getDOMNode().name === "q");
	});
});

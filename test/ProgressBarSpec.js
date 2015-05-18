import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import ProgressBar from "../src/Components/lib/ProgressBar";

describe("ProgressBar", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<ProgressBar />
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "div").getDOMNode().id === "tools-progress");
	});
});

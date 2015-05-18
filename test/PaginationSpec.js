import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Pagination from "../src/Components/lib/Pagination";

describe("Pagination", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<Pagination>
				<span>Test Pagination</span>
			</Pagination>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "pagination"));
	});
});

import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Button from "../src/Components/lib/Button";
import ToggleButtons from "../src/Components/lib/ToggleButtons";

describe("ToggleButtons", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<ToggleButtons>
				<Button>Test</Button>
			</ToggleButtons>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "btn-group"));
	});
});

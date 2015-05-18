import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Alert from "../src/Components/lib/Alert";

describe("Alert", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<Alert>
				<br/>
			</Alert>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "tools-alert"));
	});
});

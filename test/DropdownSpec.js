import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Dropdown from "../src/Components/lib/Dropdown";

describe("Dropdown", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Dropdown data={[ "one", "two", "three"]}>		
      	<a>Show Dropdown</a>
			</Dropdown>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "dropdown"));
  });
});

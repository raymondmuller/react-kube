import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import NavigationItem from "../src/Components/lib/NavigationItem";

describe("NavigationItem", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <NavigationItem><span>Test Navigation Item</span></NavigationItem>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "li"));
  });
});

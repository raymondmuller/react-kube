import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import NavigationLogo from "../src/Components/lib/NavigationLogo";

describe("NavigationLogo", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <NavigationLogo id="logo"><span>Test Navigation Item</span></NavigationLogo>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "a"));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "hide-on-mobile"));
  });
});

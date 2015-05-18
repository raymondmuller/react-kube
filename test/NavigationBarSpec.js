import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import NavigationBar from "../src/Components/lib/NavigationBar";

describe("NavigationBar", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <NavigationBar><span>Test NavBar</span></NavigationBar>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "navbar"));
  });
});

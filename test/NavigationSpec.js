import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Navigation from "../src/Components/lib/Navigation";

describe("Navigation", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Navigation id="nav" responsive>Test Navigation</Navigation>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "navigation-toggle"));
  });
});

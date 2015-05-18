import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Breadcrumb from "../src/Components/lib/Breadcrumb";

describe("Breadcrumb", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb>1</Breadcrumb>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "li"));
  });
});

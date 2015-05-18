import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import BreadCrumb from "../src/Components/lib/BreadCrumb";

describe("BreadCrumb", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <BreadCrumb>1</BreadCrumb>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "li"));
  });
});

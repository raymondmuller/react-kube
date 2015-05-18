import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import PaginationItem from "../src/Components/lib/PaginationItem";

describe("PaginationItem", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <PaginationItem>Test PaginationItem</PaginationItem>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "li"));
  });
});

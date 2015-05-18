import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import TableItem from "../src/Components/lib/TableItem";

describe("TableItem", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <TableItem>TableItem</TableItem>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "td"));
  });
});

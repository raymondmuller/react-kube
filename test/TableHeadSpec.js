import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import TableHead from "../src/Components/lib/TableHead";

describe("TableHead", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <TableHead>TableHead</TableHead>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "th"));
  });
});

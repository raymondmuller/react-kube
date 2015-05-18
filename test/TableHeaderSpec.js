import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import TableHeader from "../src/Components/lib/TableHeader";

describe("TableHeader", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <TableHeader>TableHeader</TableHeader>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "thead"));
  });
});

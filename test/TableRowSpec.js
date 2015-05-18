import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import TableRow from "../src/Components/lib/TableRow";

describe("TableRow", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <TableRow>TableRow</TableRow>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "tr"));
  });
});

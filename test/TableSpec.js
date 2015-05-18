import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Table from "../src/Components/lib/Table";

describe("Table", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table>Table</Table>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "table"));
  });
});

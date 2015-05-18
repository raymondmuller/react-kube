import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Badge from "../src/Components/lib/Badge";

describe("Badge", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Badge>1</Badge>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "badge"));
  });
});

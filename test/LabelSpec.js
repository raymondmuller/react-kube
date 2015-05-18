import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Label from "../src/Components/lib/Label";

describe("Label", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Label>Test Label</Label>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "label"));
  });
});

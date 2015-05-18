import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Tooltip from "../src/Components/lib/Tooltip";

describe("Tooltip", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Tooltip text="tooltip text"> Tooltip </Tooltip>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "tooltip"));
  });
});

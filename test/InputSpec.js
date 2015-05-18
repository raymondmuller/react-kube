import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Input from "../src/Components/lib/Input";

describe("Input", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Input />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "input").getDOMNode().type === "text");
  });
});

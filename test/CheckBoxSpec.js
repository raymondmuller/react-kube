import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import CheckBox from "../src/Components/lib/CheckBox";

describe("CheckBox", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <CheckBox>test</CheckBox>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "input").getDOMNode().type === "checkbox");
  });
});

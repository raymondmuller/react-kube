import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import SubmitButton from "../src/Components/lib/SubmitButton";

describe("SubmitButton", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <SubmitButton>Submit</SubmitButton>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "input").getDOMNode().type === "submit");
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "btn"));
  });
});

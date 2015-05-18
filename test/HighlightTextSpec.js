import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import HighlightText from "../src/Components/lib/HighlightText";

describe("HighlightText", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <HighlightText query="te" text="test"><span></span></HighlightText>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "highlight"));
  });
});

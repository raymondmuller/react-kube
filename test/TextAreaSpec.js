import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import TextArea from "../src/Components/lib/TextArea";

describe("TextArea", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <TextArea />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "textarea"));
  });
});

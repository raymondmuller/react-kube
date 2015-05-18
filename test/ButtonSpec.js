import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Button from "../src/Components/lib/Button";

describe("Button", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Button>test</Button>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "btn"));
  });
});

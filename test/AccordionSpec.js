import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Accordion from "../src/components/lib/Accordion";

describe("Accordion", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Accordion>test</Accordion>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "accordion-title"));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "accordion-toggle"));
  });
});

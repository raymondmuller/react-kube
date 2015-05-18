import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import FormSection from "../src/Components/lib/FormSection";

describe("FormSection", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormSection>test</FormSection>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "fieldset"));
  });
});

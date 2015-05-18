import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Form from "../src/Components/lib/Form";

describe("Form", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Form>test</Form>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "forms"));
  });
});

import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import FormList from "../src/Components/lib/FormList";

describe("FormList", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormList>test</FormList>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "forms-list"));
  });
});

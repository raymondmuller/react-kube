import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Breadcrumbs from "../src/Components/lib/Breadcrumbs";

describe("Breadcrumbs", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumbs>1</Breadcrumbs>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "li"));
  });
});

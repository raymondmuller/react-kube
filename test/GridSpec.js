import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Grid from "../src/Components/lib/Grid";

describe("Grid", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Grid>test</Grid>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "units-row"));
  });
});

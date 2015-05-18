import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import GridItem from "../src/Components/lib/GridItem";

describe("GridItem", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <GridItem size={20}>test</GridItem>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "unit-20"));
  });
});

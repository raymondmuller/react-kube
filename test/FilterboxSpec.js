import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Filterbox from "../src/Components/lib/Filterbox";

describe("Filterbox", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Filterbox data={[ "1", "2", "3"]}>test</Filterbox>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "filterbox"));
  });
});

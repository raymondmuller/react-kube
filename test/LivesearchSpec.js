import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Livesearch from "../src/Components/lib/Livesearch";

describe("Livesearch", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Livesearch data={["1", "2", "3"]}/>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "livesearch-box"));
  });
});

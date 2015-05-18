import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Block from "../src/Components/lib/Block";

describe("Block", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Block><br/></Block>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "li"));
  });
});
 
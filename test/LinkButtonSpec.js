import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import LinkButton from "../src/Components/lib/LinkButton";

describe("LinkButton", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <LinkButton url="http://www.raymondmuller.com/">Test LinkButton</LinkButton>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, "a").getDOMNode().href === "http://www.raymondmuller.com/");
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "btn"));
  });
});

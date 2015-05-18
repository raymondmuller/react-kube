import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Message from "../src/Components/lib/Message";

describe("Message", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Message show={true}>Test Message</Message>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "tools-message"));
  });
});

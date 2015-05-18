import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Modal from "../src/Components/lib/Modal";

describe("Modal", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Modal show={true}>Test Modal</Modal>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "modal"));
  });
});

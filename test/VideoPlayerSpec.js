import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import VideoPlayer from "../src/Components/lib/VideoPlayer";

describe("VideoPlayer", function () {
  it("should exist in the dom", function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <VideoPlayer />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "video-wrapper"));
  });
});

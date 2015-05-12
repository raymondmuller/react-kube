import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import assert from 'assert';

import Alert from '../src/Components/Lib/Alert';


describe('Alert', function () {

  afterEach(function(done) {
        React.unmountComponentAtNode(document.body) // Assuming mounted to document.body
        document.body.innerHTML = ""                // Just to be sure :-P
        setTimeout(done)
    });

  it('Should output an alert with message', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Alert>
        Message
      </Alert>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'tools-alert'));
  });
});
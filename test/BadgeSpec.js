import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import assert from 'assert';

import Badge from '../src/Components/Lib/Badge';

describe('Alert', function () {
  it('Should output a alert with message', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Badge>
        1
      </Badge>
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'react-alert-wrapper'));
  });

});
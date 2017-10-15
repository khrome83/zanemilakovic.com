import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../pages/index';

it('Index Renders Correctly', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

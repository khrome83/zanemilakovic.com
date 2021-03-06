import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import App from '../../pages/index';

test('Index Page Renders Correctly', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

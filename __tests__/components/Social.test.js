import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Social from '../../components/Social';

test('Social renders correctly', () => {
  const component = renderer.create(<Social className="large-font">Test to Render</Social>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

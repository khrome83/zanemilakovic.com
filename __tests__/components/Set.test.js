import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Set from '../../components/Set';

test('Set renders correctly', () => {
  const component = renderer.create(<Set desktop={3} tablet={2} mobile={1} gutter>Test to Render</Set>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

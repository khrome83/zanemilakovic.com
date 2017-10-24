import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import P from '../../components/P';

test('P renders correctly', () => {
  const component = renderer.create(<P className="large-font">Test to Render</P>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

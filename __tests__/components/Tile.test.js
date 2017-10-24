import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Tile from '../../components/Tile';

test('Tile renders correctly', () => {
  const component = renderer.create(<Tile>Test to Render</Tile>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

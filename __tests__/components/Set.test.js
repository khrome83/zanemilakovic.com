import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Set from '../../components/Set';
import Tile from '../../components/Tile';

test('Set renders correctly', () => {
  const component = renderer.create(
    <Set desktop={3} tablet={2} mobile={1}>
      <Tile>Tile 1</Tile>
      <Tile>Tile 2</Tile>
      <Tile>Tile 3</Tile>
      <Tile>Tile 4</Tile>
      <Tile>Tile 5</Tile>
      <Tile>Tile 6</Tile>
    </Set>
  );
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('Set renders correctly with Gutter', () => {
  const component = renderer.create(
    <Set desktop={4} tablet={2} mobile={1} gutter>
      <Tile>Tile 1</Tile>
      <Tile>Tile 2</Tile>
      <Tile>Tile 3</Tile>
      <Tile>Tile 4</Tile>
    </Set>
  );
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

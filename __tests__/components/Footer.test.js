import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Footer from '../../components/Footer';

test('Footer renders correctly', () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

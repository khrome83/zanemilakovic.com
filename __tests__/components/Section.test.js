import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Section, { SectionFullBleed, Overlay } from '../../components/Section';

test('Section renders correctly', () => {
  const component = renderer.create(<Section>Content Goes Here</Section>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('SectionFullBleed renders correctly', () => {
  const component = renderer.create(<SectionFullBleed>Content Goes Here</SectionFullBleed>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('Overlay renders correctly', () => {
  const component = renderer.create(<Overlay>Content Goes Here</Overlay>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

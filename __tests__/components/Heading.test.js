import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Heading, { H1, H2, H3, H4, H5, H6 } from '../../components/Heading';

test('Heading renders Correctly', () => {
  const component = renderer.create(
    <div>
      <Heading level={1} id="foobar" className="large">Heading 1</Heading>
      <Heading level={2} id="foobar" className="large">Heading 2</Heading>
      <Heading level={3} id="foobar" className="large">Heading 3</Heading>
      <Heading level={4} id="foobar" className="large">Heading 4</Heading>
      <Heading level={5} id="foobar" className="large">Heading 5</Heading>
      <Heading level={6} id="foobar" className="large">Heading 6</Heading>
    </div>
  );
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('H1 renders correct', () => {
  const component = renderer.create(<H1 id="foobar" className="large">Heading 1</H1>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('H2 renders correct', () => {
  const component = renderer.create(<H2 id="foobar" className="large">Heading 2</H2>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('H3 renders correct', () => {
  const component = renderer.create(<H3 id="foobar" className="large">Heading 3</H3>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('H4 renders correct', () => {
  const component = renderer.create(<H4 id="foobar" className="large">Heading 4</H4>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('H5 renders correct', () => {
  const component = renderer.create(<H5 id="foobar" className="large">Heading 5</H5>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('H6 renders correct', () => {
  const component = renderer.create(<H6 id="foobar" className="large">Heading 6</H6>);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

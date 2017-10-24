import React from 'react';
import renderer from 'react-test-renderer';
import { cleanSnapshots } from '../../libs/testUtilities';
import Image, { Picture, Source } from '../../components/Image';

test('Image renders correctly', () => {
  const props = {
    sizes: '(max-width: 1982px) 100vw, 1982px',
    srcSet: `
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_768.jpg 768w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1096.jpg 1096w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1352.jpg 1352w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1597.jpg 1597w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1830.jpg 1830w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1982.jpg 1982w"
    `,
    src: 'kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1982.jpg',
    alt: 'Laptop sitting on desk',
  };

  const component = renderer.create(<Image {...props} />);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('Source renders correctly', () => {
  const props = {
    media: '(max-width: 767px)',
    sizes: '(max-width: 1534px) 100vw, 1534px',
    srcSet: `
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_320.jpg 320w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_733.jpg 733w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1014.jpg 1014w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1293.jpg 1293w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1499.jpg 1499w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1534.jpg 1534w
    `,
  };

  const component = renderer.create(<Source {...props} />);
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

test('Picture renders correctly', () => {
  const sourceProps = {
    media: '(max-width: 767px)',
    sizes: '(max-width: 1534px) 100vw, 1534px',
    srcSet: `
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_320.jpg 320w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_733.jpg 733w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1014.jpg 1014w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1293.jpg 1293w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1499.jpg 1499w,
      kari-shea-272383_bbmubb_ar_1_1,c_fill,g_auto__c_scale,w_1534.jpg 1534w
    `,
  };

  const imageProps = {
    sizes: '(max-width: 1982px) 100vw, 1982px',
    srcSet: `
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_768.jpg 768w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1096.jpg 1096w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1352.jpg 1352w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1597.jpg 1597w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1830.jpg 1830w,
      kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1982.jpg 1982w"
    `,
    src: 'kari-shea-272383_bbmubb_ar_4_3,c_fill,g_auto__c_scale,w_1982.jpg',
    alt: 'Laptop sitting on desk',
  };

  const component = renderer.create(
    <Picture>
      <Source {...sourceProps} />
      <Image {...imageProps} />
    </Picture>
  );
  const tree = component.toJSON();
  cleanSnapshots(tree);
  expect(tree).toMatchSnapshot();
});

// @ts-check --jsx
/* eslint-disable max-len */

import Layout from '../layouts/default';
import Section, { SectionFullBleed, Overlay } from '../components/Section';
import Image, { Picture, Source } from '../components/Image';
import { H1, H2, H3, H4, H5, H6 } from '../components/Heading';
import P from '../components/P';
import Set from '../components/Set';
import Tile from '../components/Tile';

const IndexPage = () => {
  const social = {
    description: 'Zane Milakovic\' Portfolio',
    title: 'Zane Milakovic',
    image: 'image.jpg',
    imageAlt: 'Screenshot',
  };

  const mastheadDesktop = {
    alt: 'Laptop sitting on Laptop',
    src: '/static/images/mh,w_2880.jpg',
    sizes: '(max-width: 2880px) 100vw, 2880px',
    srcSet: `
      /static/images/mh,w_992.jpg 992w,
      /static/images/mh,w_1597.jpg 1597w,
      /static/images/mh,w_2075.jpg 2075w,
      /static/images/mh,w_2492.jpg 2492w,
      /static/images/mh,w_2793.jpg 2793w,
      /static/images/mh,w_2880.jpg 2880w
    `,
  };

  const mastheadTablet = {
    media: '(min-width: 768px) and (max-width: 991px)',
    sizes: '(max-width: 1982px) 100vw, 1982px',
    srcSet: `
      /static/images/mh,w_768.jpg 768w,
      /static/images/mh,w_1309.jpg 1309w,
      /static/images/mh,w_1758.jpg 1758w,
      /static/images/mh,w_1982.jpg 1982w
    `,
  };

  const mastheadMobile = {
    media: '(max-width: 767px)',
    sizes: '(max-width: 1534px) 100vw, 1534px',
    srcSet: `
      /static/images/mh,w_320.jpg 320w,
      /static/images/mh,w_974.jpg 974w,
      /static/images/mh,w_1430.jpg 1430w,
      /static/images/mh,w_1534.jpg 1534w
    `,
  };

  return (
    <Layout social={social}>
      <SectionFullBleed className="masthead">
        <Picture>
          <Source {...mastheadMobile} />
          <Source {...mastheadTablet} />
          <Image {...mastheadDesktop} />
        </Picture>
        <Overlay>
          <Image width="90px" alt="logo" src="/static/images/logo.svg" />
        </Overlay>
      </SectionFullBleed>
      <Section>
        <Set mobile={1} tablet={2} desktop={4} gutter>
          <Tile>Quisque tincidunt eleifend pulvinar.</Tile>
          <Tile>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Tile>
          <Tile>Praesent malesuada pulvinar erat, feugiat pellentesque massa finibus eu.</Tile>
          <Tile>Morbi ac urna in diam vulputate semper.</Tile>
        </Set>
      </Section>
      <Section dark>
        <H1>Heading Level 1</H1>
        <H2>Heading Level 2</H2>
        <H3>Heading Level 3</H3>
        <H4>Heading Level 4</H4>
        <H5>Heading Level 5</H5>
        <H6>Heading Level 6</H6>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nisi ut pretium ullamcorper. Fusce quis mauris congue, tempus justo sit amet, porttitor tortor. Sed commodo, sapien sed molestie vestibulum, arcu velit tincidunt massa, eget dignissim mauris diam at orci. Ut ornare molestie leo, a dapibus augue finibus sit amet. Morbi felis mauris, tincidunt sit amet nibh a, malesuada suscipit metus. Pellentesque nulla felis, tincidunt at auctor nec, auctor in lectus. Ut ac vehicula elit, sed congue justo. Aliquam luctus venenatis urna. Praesent malesuada pulvinar erat, feugiat pellentesque massa finibus eu.</P>
        <P>Quisque tincidunt eleifend pulvinar. Vestibulum sit amet nunc arcu. Etiam dolor orci, consequat vel suscipit sed, pulvinar sit amet nisl. Mauris eget vestibulum metus. Duis nibh orci, ultrices nec elementum at, fermentum quis massa. Phasellus dignissim congue nisi, a euismod felis rhoncus et. Duis lobortis, orci ut vehicula lacinia, quam dolor fringilla ipsum, a blandit nibh velit eget metus. Donec blandit viverra urna non pulvinar. Phasellus scelerisque semper arcu, congue posuere est blandit eu.</P>
        <P>Etiam pulvinar quam eros. Cras lacinia laoreet est, vitae cursus lorem fermentum nec. Nulla gravida efficitur lectus, in accumsan mauris ullamcorper in. Integer gravida, tortor egestas fermentum lobortis, justo nulla malesuada dui, non ultrices velit dui ut ligula. Pellentesque eu sollicitudin sapien. In hac habitasse platea dictumst. Donec velit eros, efficitur id aliquam eget, aliquet vitae est. Aliquam tellus urna, mollis at arcu vel, rutrum molestie magna. Donec sollicitudin tristique erat ac pulvinar. Sed at euismod nibh, vitae sollicitudin justo. Ut a leo sit amet odio semper porttitor. Morbi ut varius nunc. Sed mauris erat, rutrum in tempus eget, molestie sit amet libero. Morbi ac urna in diam vulputate semper.</P>
      </Section>
    </Layout>
  );
};

export default IndexPage;

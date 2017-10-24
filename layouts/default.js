// @ts-check --jsx

import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Default = ({ social, children }) => (
  <div className="content">
    <Head>
      <title>{ 'Zane Milakovic\'s Blog' }</title>
      <meta name="description" content={social.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={social.title} />
      <meta property="og:site_name" content="Zane Milakovic's Protfolio" />
      <meta property="og:url" content="https://zanemilakovic.com" />
      <meta property="og:image" content={social.image} />
      <meta property="og:description" content={social.description} />
      <meta property="fb:app_id" content="xyzxyzxyz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@khrome83" />
      <meta name="twitter:title" content={social.title} />
      <meta name="twitter:description" content={social.description} />
      <meta name="twitter:image" content={`http:${social.image}`} />
      <meta name="twitter:image:alt" content={social.imageAlt} />
    </Head>
    <Header />
    { children }
    <Footer />
  </div>
);

Default.defaultProps = {
  social: {
    description: 'Zane Milakovic\' Portfolio',
    title: 'Zane Milakovic',
    image: 'image.jpg',
    imageAlt: 'Screenshot',
  },
};

Default.propTypes = {
  social: PropTypes.shape(
    {
      description: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      imageAlt: PropTypes.string,
    }
  ),
  children: PropTypes.node.isRequired,
};

export default Default;

// @ts-check --jsx

import PropTypes from 'prop-types';
import Head from 'next/head';

// Picture Element
const Picture = ({ children }) => (
  <picture>
    { children }
    <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js" integrity="sha256-iT+n/otuaeKCgxnASny7bxKeqCDbaV1M7VdX1ZRQtqg=" crossOrigin="anonymous" />
    </Head>
    <style jsx>{`
      .header {
        width: 100%;
      }
    `}</style>
  </picture>
);

Picture.propTypes = {
  children: PropTypes.node.isRequired,
};

// Image Element
const Image = props => (
  <img {...props} alt={props.alt} />
);

Image.defaultProps = {
  sizes: null,
  srcSet: null,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
};

// Source Element
const Source = props => (
  <source {...props} />
);

Source.defaultProps = {
  sizes: null,
};

Source.propTypes = {
  srcSet: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  sizes: PropTypes.string,
};

export { Image as default, Picture, Source };

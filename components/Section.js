// @ts-check --jsx

import PropTypes from 'prop-types';

const Section = ({ children, className, dark }) => (
  <section className={`section ${className} ${dark && 'dark'}`}>
    <div className="content">
      { children }
    </div>
    <style jsx>{`
      @import './styles/variables.css';

      .section {
        position: relative;
        padding: 0 var(--outer-padding-mobile);
        border-top: 1px solid transparent;

        @media (--tablet-viewport) {
          padding: 0 var(--outer-padding-tablet);
        }

        @media (--desktop-viewport) {
          padding: 0 var(--outer-padding-desktop);
        }
      }

      .dark {
        background-color: brown;

        & :global(*) {
          color: var(--page-font-color-light);
        }
      }

      .content {
        margin: 0 auto;
        max-width: var(--max-content-width);
      }
    `}</style>
  </section>
);

Section.defaultProps = {
  className: null,
  dark: false,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool,
};

const SectionFullBleed = ({ children, className }) => (
  <section className={`section ${className}`}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .section {
        position: relative;
        width: 100vw;
        max-width: var(--max-bleed-width);
      }

      .masthead {
        height: 100vw; /* 1:1 */

        @media (--tablet-viewport) {
          height: 75vw; /* 4:3 */
        }

        @media (--desktop-viewport) {
          height: 56.25vw; /* 16:9 */
        }
      }
    `}</style>
  </section>
);

SectionFullBleed.defaultProps = {
  className: null,
};

SectionFullBleed.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Overlay = ({ children }) => (
  <div className="overlay">
    { children }
    <style jsx>{`
      .overlay {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </div>
);

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Section as default, SectionFullBleed, Overlay };

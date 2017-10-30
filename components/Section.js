// @ts-check --jsx

import PropTypes from 'prop-types';

const Section = ({ children, className, dark, bold, light }) => (
  <section className={`section ${className} ${dark && 'dark'} ${bold && 'bold'} ${light && 'light'}`}>
    <div className="content">
      { children }
    </div>
    <style jsx>{`
      @import './styles/variables.css';

      .section {
        position: relative;
        padding: 0 var(--outer-padding-mobile);
        border-top: 1px solid transparent;
        background-color: var(--page-bg-color);

        @media (--tablet-viewport) {
          padding: 0 var(--outer-padding-tablet);
        }

        @media (--desktop-viewport) {
          padding: 0 var(--outer-padding-desktop);
        }
      }

      .dark {
        background-color: var(--page-bg-color-dark);

        & :global(*) {
          color: var(--page-font-color-light);
        }
      }

      .bold {
        background-color: var(--page-bg-color-bold);

        & :global(*) {
          color: var(--page-font-color-light);
        }
      }

      .light {
        background-color: var(--page-bg-color-light);

        & :global(*) {
          color: var(--page-font-color-dark);
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
  bold: false,
  light: false,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  light: PropTypes.bool,
};

const SectionAngled = ({ children, className, dark, bold, light, reversed, skinny }) => (
  <section className={`section ${className} ${dark && 'dark'} ${bold && 'bold'} ${light && 'light'} ${reversed && 'reversed'} ${skinny && 'skinny'}`}>
    <div className="content">
      { children }
    </div>
    <style jsx>{`
      @import './styles/variables.css';

      .section {
        position: relative;
        z-index: 1;
        border-top: 1px solid transparent;
        background-color: var(--page-bg-color);
        padding: calc(var(--line-height-min) * 1rem) var(--outer-padding-mobile);
        margin: calc(var(--line-height-min) * 1rem) 0;

        @media (--tablet-viewport) {
          padding: calc(var(--line-height-mid) * 1rem) var(--outer-padding-tablet);
          margin: calc(var(--line-height-mid) * 1rem) 0;
        }

        @media (--desktop-viewport) {
          padding: calc(var(--line-height-max) * 1rem) var(--outer-padding-desktop);
          margin: calc(var(--line-height-max) * 1rem) 0;
        }

        &:before,
        &:after {
          background: inherit;
          content: '';
          display: block;
          height: 50%;
          left: 0;
          right: 0;
          position: absolute;
          z-index: -1;
          transform: skewY(1.5deg);
          transform-origin: calc(100% + var(--outer-padding-mobile));

          @media (--tablet-viewport) {
            transform-origin: calc(100% + var(--outer-padding-tablet));
          }

          @media (--desktop-viewport) {
            transform-origin: calc(100% + var(--outer-padding-desktop));
          }
        }

        &:before {
          top: 0;
        }

        &:after {
          transform: skewY(-1.5deg);
          bottom: 0;
        }
      }

      .dark {
        background-color: var(--page-bg-color-dark);

        & :global(*) {
          color: var(--page-font-color-light);
        }
      }

      .bold {
        background-color: var(--page-bg-color-bold);

        & :global(*) {
          color: var(--page-font-color-light);
        }
      }

      .light {
        background-color: var(--page-bg-color-light);

        & :global(*) {
          color: var(--page-font-color-dark);
        }
      }

      .reversed:before,
      .reversed:after {
        transform: skewY(-1.5deg);
        transform-origin: calc(0% - var(--outer-padding-mobile));

        @media (--tablet-viewport) {
          transform-origin: calc(0% - var(--outer-padding-tablet));
        }

        @media (--desktop-viewport) {
          transform-origin: calc(0% - var(--outer-padding-desktop));
        }
      }

      .reversed:after {
        transform: skewY(1.5deg);
      }

      .skinny {
        padding-top: 0;
        padding-bottom: 0;
      }

      .content {
        margin: 0 auto;
        max-width: var(--max-content-width);
      }
    `}</style>
  </section>
);

SectionAngled.defaultProps = {
  className: null,
  dark: false,
  bold: false,
  light: false,
  reversed: false,
  skinny: false,
};

SectionAngled.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  reversed: PropTypes.bool,
  skinny: PropTypes.bool,
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

export { Section as default, SectionFullBleed, SectionAngled, Overlay };

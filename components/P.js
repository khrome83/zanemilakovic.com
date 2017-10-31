// @ts-check --jsx

import PropTypes from 'prop-types';

const P = ({ children, className, centered }) => (
  <p className={`p ${className} ${centered && 'centered'}`}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .p {
        line-height: var(--line-height-min);
        padding-bottom: var(--line-height-min);
        max-width: var(--max-text-width);
        letter-spacing: -0.004rem;

        &:first-child {
          margin-top: var(--line-height-min);

          @media (--tablet-viewport) {
            margin-top: var(--line-height-mid);
            letter-spacing: -0.003rem;
          }

          @media (--desktop-viewport) {
            margin-top: var(--line-height-max);
          }
        }

        @media (--tablet-viewport) {
          line-height: var(--line-height-mid);
          padding-bottom: var(--line-height-mid);
        }

        @media (--desktop-viewport) {
          line-height: var(--line-height-max);
          padding-bottom:  var(--line-height-max);
        }
      }

      .p.centered {
        text-algin: center;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </p>
);

P.defaultProps = {
  className: null,
  centered: false,
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  centered: PropTypes.bool,
};

const BlockQuote = ({ children, className }) => (
  <blockquote className={`block-quote ${className}`}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .block-quote {
        font-size: 1.25rem;
        line-height: var(--line-height-min);
        max-width: var(--max-text-width);
        letter-spacing: -0.004rem;
        margin: 1rem auto;
        font-weight: 700;

        @media (--tablet-viewport) {
          font-size: 1.5rem;
          line-height: var(--line-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: 1.75rem;
          line-height: var(--line-height-max);
        }
      }
    `}</style>
  </blockquote>
);

BlockQuote.defaultProps = {
  className: null,
};

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Callout = ({ children, className, src, alt, reversed }) => (
  <div className={`callout ${className} ${reversed && 'reversed'}`}>
    <div className="icon">
      <img src={src} alt={alt} />
    </div>
    <div className="text">
      { children }
    </div>
    <style jsx>{`
      @import './styles/variables.css';

      .callout {
        align-items: center;
        text-align: center;

        @media (--small-tablet-viewport) {
          display: flex;
        }
      }

      .icon {
        fill: #fff;
        flex: 1;
        padding: 0 2rem 1rem;

        @media (--small-tablet-viewport) {
          padding-bottom: 0;
        }
      }

      .text {
        flex: 4;
        font-size: 1.25rem;
        line-height: var(--line-height-min);
        max-width: var(--max-text-width);
        letter-spacing: -0.004rem;
        margin: 1rem auto;
        font-weight: 500;

        @media (--small-tablet-viewport) {
          text-align: left;
        }

        @media (--tablet-viewport) {
          font-size: 1.5rem;
          line-height: var(--line-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: 1.75rem;
          line-height: var(--line-height-max);
        }
      }

      .reversed .text {
        order: -1;
      }
    `}</style>
  </div>
);

Callout.defaultProps = {
  className: null,
  reversed: false,
};

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  reversed: PropTypes.bool,
};

export { P as default, BlockQuote, Callout };

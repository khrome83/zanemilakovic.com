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

export { P as default };

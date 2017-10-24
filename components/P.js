// @ts-check --jsx

import PropTypes from 'prop-types';

const P = ({ children, className }) => (
  <p className={`p ${className}`}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .p {
        margin: 0;
        line-height: var(--line-height-min);
        padding-bottom: var(--line-height-min);
        max-width: var(--max-text-width);

        @media (--tablet-viewport) {
          line-height: var(--line-height-mid);
          padding-bottom: var(--line-height-mid);
        }

        @media (--desktop-viewport) {
          line-height: var(--line-height-max);
          padding-bottom:  var(--line-height-max);
        }
      }
    `}</style>
  </p>
);

P.defaultProps = {
  className: null,
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { P as default };

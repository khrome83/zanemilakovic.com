// @ts-check --jsx

import PropTypes from 'prop-types';

// Convert to Grid, add Set that uses Flexbox Spacing
const Set = ({ children }) => (
  <div className="set">
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .set {
        display: flex;
        justify-content: space-between;
        padding-top: var(--outer-padding-mobile);

        @media (--tablet-viewport) {
          padding-top: var(--outer-padding-tablet);
        }

        @media (--desktop-viewport) {
          padding-top: var(--outer-padding-desktop);
        }
      }

      .set :global(.tile) {
        margin-bottom: var(--outer-padding-mobile);

        @media (--tablet-viewport) {
          margin-bottom: var(--outer-padding-tablet);
        }

        @media (--desktop-viewport) {
          margin-bottom: var(--outer-padding-desktop);
        }
      }
    `}</style>
  </div>
);

Set.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Set as default };
